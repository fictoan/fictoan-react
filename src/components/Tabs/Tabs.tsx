import React, { useEffect } from "react";

import { Element } from "../Element/Element";
import { Div } from "../Element/Tags";
import { HRule } from "../HRule/HRule";
import { Text } from "../Typography/Text";

import { CommonAndHTMLProps } from "../Element/constants";

import "./tabs.css";

// prettier-ignore
interface TabType {
    key     : string;
    label   : React.ReactNode;
    content : React.ReactNode;
}

// prettier-ignore
export interface TabsCustomProps {
    tabs                          : TabType[];
    /** wrapper to render additional content inside the nav along with tab labels */
    additionalNavContentWrapper ? : React.ReactNode;
    defaultActiveTab            ? : React.ReactNode;
    align                       ? : "left" | "centre" | "center" | "right";
}

export type TabsElementType = HTMLDivElement;
export type TabsProps = Omit<CommonAndHTMLProps<TabsElementType>, keyof TabsCustomProps> & TabsCustomProps;

export const Tabs = React.forwardRef(
    ({ tabs, additionalNavContentWrapper, defaultActiveTab, align = "left", ...props }: TabsProps, ref: React.Ref<TabsElementType>) => {
        const index = tabs.findIndex((tab) => tab.key === defaultActiveTab);
        const defaultTabIndex = index > -1 ? index : 0;
        const [activeTab, setActiveTab] = React.useState<TabType | undefined>(
            tabs.length > 0 ? tabs[defaultTabIndex] : undefined
        );
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
            <Element<TabsElementType> as="div" data-tabs ref={ref} {...props}>
                {tabs.length > 0 && activeTab ? (
                    <>
                        <nav className={`align-${align}`}>
                            <ul className="tab-labels-list">
                                {tabs.map((tab) => (
                                    <li key={tab.key}>
                                        <Text
                                            className={`tab-label is-clickable ${tab.key === activeTab.key ? "is-active" : ""}`}
                                            onClick={() => handleTabChange(tab)}
                                            marginBottom="none"
                                        >
                                            {tab.label}
                                        </Text>
                                    </li>
                                ))}
                            </ul>
                            {additionalNavContentWrapper && <>{additionalNavContentWrapper}</>}
                        </nav>

                        <HRule kind="secondary" marginTop="none" marginBottom="micro" />

                        <Div className={`tabs-content ${isExiting ? "exiting" : ""}`}>
                            {activeTab.content}
                        </Div>
                    </>
                ) : (
                    <></>
                )}
            </Element>
        );
    }
);
