import React from "react";
import { ComponentStory } from "@storybook/react";
import { SidebarNestedLinks } from "./SidebarNestedLinks";

const Template: ComponentStory<typeof SidebarNestedLinks> = (args) => <SidebarNestedLinks {...args} />;


export const Default: ComponentStory<typeof SidebarNestedLinks> = Template.bind({});
Default.args = {
    
};
