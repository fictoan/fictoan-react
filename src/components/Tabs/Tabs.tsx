import React, { useEffect } from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";
import { HRule } from "../HRule/HRule";
import { Text } from "../Typography/Text";

import { TabsStyled } from "./Tabs.styled";

interface TabType {
    key: string;
    label: string;
    content: React.ReactNode;
}

interface TabsCustomProps {
    tabs: TabType[];
}

export type TabsElementType = HTMLDivElement;
export type TabsProps = CommonAndHTMLProps<TabsElementType> & TabsCustomProps;

export const Tabs = React.forwardRef(({ tabs, ...props }: TabsProps, ref: React.Ref<TabsElementType>) => {
    const [indexToSet, setIndexToSet] = React.useState<number>(0);
    const [activeTabIndex, setActiveTabIndex] = React.useState<number>(0);
    const [isExiting, setIsExiting] = React.useState<boolean>(false);

    // HACK FOR ANIMATION ///////////////////////
    useEffect(() => {
        setIsExiting(true);
        setTimeout(() => {
            setIsExiting(false);
            setActiveTabIndex(indexToSet);
        }, 120);
    }, [indexToSet]);
    ////////////////////////////////////////////

    return (
        <Element<TabsElementType> as={TabsStyled} ref={ref} {...props}>
            <nav>
                {tabs.map((tab, index) => (
                    <Text
                        key={tab.key}
                        className={`is-clickable ${index === activeTabIndex ? "is-active" : ""}`}
                        onClick={() => setIndexToSet(index)}
                    >
                        {tab.label}
                    </Text>
                ))}
            </nav>
            <HRule kind="secondary" marginTop="micro" marginBottom="micro" />
            <Element 
                as="div"
                className={`tabs-content ${isExiting ? "exiting" : ""}`}
            >
                {tabs[activeTabIndex].content}
            </Element>
        </Element>
    );
});
