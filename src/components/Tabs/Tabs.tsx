import React from "react";
import { motion } from "framer-motion";

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
    const [activeTab, setActiveTab] = React.useState<number>(0);

    return (
        <Element<TabsElementType> as={TabsStyled} ref={ref} {...props}>
            <nav>
                {tabs.map((tab, index) => (
                    <Text
                        key={tab.key}
                        className={`is-clickable ${index === activeTab ? "is-active" : ""}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </Text>
                ))}
            </nav>
            <HRule kind="secondary" marginTop="micro" marginBottom="micro" />
            {tabs.map(
                (tab, index) =>
                    index === activeTab && (
                        <motion.div
                            key={tab.key}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ ease: "easeInOut", duration: 0.24 }}
                        >
                            {tab.content}
                        </motion.div>
                    )
            )}
        </Element>
    );
});
