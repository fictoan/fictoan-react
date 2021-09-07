import React from "react";
import { ComponentStory } from "@storybook/react";
import { SidebarItemText } from "./SidebarItemText";

const Template: ComponentStory<typeof SidebarItemText> = (args) => <SidebarItemText {...args} />;


export const Default: ComponentStory<typeof SidebarItemText> = Template.bind({});
Default.args = {
    
};
