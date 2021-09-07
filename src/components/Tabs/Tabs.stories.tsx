import React from "react";
import { ComponentStory } from "@storybook/react";
import { Tabs } from "./Tabs";

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;


export const Default: ComponentStory<typeof Tabs> = Template.bind({});
Default.args = {
    
};
