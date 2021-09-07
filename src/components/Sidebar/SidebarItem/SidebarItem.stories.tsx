import React from "react";
import { ComponentStory } from "@storybook/react";
import { SidebarItem } from "./SidebarItem";

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />;


export const Default: ComponentStory<typeof SidebarItem> = Template.bind({});
Default.args = {
    
};
