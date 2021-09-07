import React from "react";
import { ComponentStory } from "@storybook/react";
import { SidebarItemsGroupHeader } from "./SidebarItemsGroupHeader";

const Template: ComponentStory<typeof SidebarItemsGroupHeader> = (args) => <SidebarItemsGroupHeader {...args} />;


export const Default: ComponentStory<typeof SidebarItemsGroupHeader> = Template.bind({});
Default.args = {
    
};
