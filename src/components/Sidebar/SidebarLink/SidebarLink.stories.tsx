import React from "react";
import { ComponentStory } from "@storybook/react";
import { SidebarLink } from "./SidebarLink";

const Template: ComponentStory<typeof SidebarLink> = (args) => <SidebarLink {...args} />;


export const Default: ComponentStory<typeof SidebarLink> = Template.bind({});
Default.args = {
    
};
