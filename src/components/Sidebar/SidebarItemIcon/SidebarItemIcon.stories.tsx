import React from "react";
import { ComponentStory } from "@storybook/react";
import { SidebarItemIcon } from "./SidebarItemIcon";

const Template: ComponentStory<typeof SidebarItemIcon> = (args) => <SidebarItemIcon {...args} />;


export const Default: ComponentStory<typeof SidebarItemIcon> = Template.bind({});
Default.args = {
    
};
