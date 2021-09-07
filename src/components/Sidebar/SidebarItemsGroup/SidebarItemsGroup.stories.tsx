import React from "react";
import { ComponentStory } from "@storybook/react";
import { SidebarItemsGroup } from "./SidebarItemsGroup";

const Template: ComponentStory<typeof SidebarItemsGroup> = (args) => <SidebarItemsGroup {...args} />;


export const Default: ComponentStory<typeof SidebarItemsGroup> = Template.bind({});
Default.args = {
    
};
