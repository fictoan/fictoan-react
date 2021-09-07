import React from "react";
import { ComponentStory } from "@storybook/react";
import { SidebarLinksWrapper } from "./SidebarLinksWrapper";

const Template: ComponentStory<typeof SidebarLinksWrapper> = (args) => <SidebarLinksWrapper {...args} />;


export const Default: ComponentStory<typeof SidebarLinksWrapper> = Template.bind({});
Default.args = {
    
};
