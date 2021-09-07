import React from "react";
import { ComponentStory } from "@storybook/react";
import { SidebarWrapper } from "./SidebarWrapper";

const Template: ComponentStory<typeof SidebarWrapper> = (args) => <SidebarWrapper {...args} />;


export const Default: ComponentStory<typeof SidebarWrapper> = Template.bind({});
Default.args = {
    
};
