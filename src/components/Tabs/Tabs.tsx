import React, { useEffect } from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";
import { HRule } from "../HRule/HRule";
import { Text } from "../Typography/Text";

import { TabsStyled } from "./Tabs.styled";

// prettier-ignore
interface TabType {
    key     : string;
    label   : string;
    content : React.ReactNode;
}

// prettier-ignore
export interface TabsCustomProps {
    tabs : TabType[];
}

export type TabsElementType = HTMLDivElement;
export type TabsProps = Omit<CommonAndHTMLProps<TabsElementType>, keyof TabsCustomProps> & TabsCustomProps;

export const Tabs = React.forwardRef(({ tabs, ...props }: TabsProps, ref: React.Ref<TabsElementType>) => {
    const [activeTab, setActiveTab] = React.useState<TabType | undefined>(tabs.length > 0 ? tabs[0] : undefined);
    const [isExiting, setIsExiting] = React.useState<boolean>(false);

    const handleTabChange = (tab: TabType) => {
        setIsExiting(true);
        setTimeout(() => {
            setIsExiting(false);
            setActiveTab(tab);
        }, 120);
    };

    useEffect(() => {
        if (tabs.length > 0) {
            const matchingTab = tabs.find((tab) => tab.key === activeTab?.key);
            if (matchingTab) {
                handleTabChange(matchingTab);
            } else {
                handleTabChange(tabs[0]);
            }
        } else {
            setActiveTab(undefined);
        }
    }, [tabs]);

    return (
        <Element<TabsElementType> as={TabsStyled} ref={ref} {...props}>
            {tabs.length > 0 && activeTab ? (
                <>
                    <nav>
                        {tabs.map((tab) => (
                            <Text
                                key={tab.key}
                                className={`is-clickable ${tab.key === activeTab.key ? "is-active" : ""}`}
                                onClick={() => handleTabChange(tab)}
                                marginBottom="none"
                            >
                                {tab.label}
                            </Text>
                        ))}
                    </nav>
                    <HRule kind="secondary" marginTop="none" marginBottom="micro" />
                    <Element as="div" className={`tabs-content ${isExiting ? "exiting" : ""}`}>
                        {activeTab.content}
                    </Element>
                </>
            ) : (
                <></>
            )}
        </Element>
    );
});
