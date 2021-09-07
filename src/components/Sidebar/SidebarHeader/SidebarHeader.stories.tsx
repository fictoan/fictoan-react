import React from "react";
import { ComponentStory } from "@storybook/react";
import { SidebarHeader } from "./SidebarHeader";

const Template: ComponentStory<typeof SidebarHeader> = (args) => <SidebarHeader {...args} />;


export const Default: ComponentStory<typeof SidebarHeader> = Template.bind({});
Default.args = {
    
};
