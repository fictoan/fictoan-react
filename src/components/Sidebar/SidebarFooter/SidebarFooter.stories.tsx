import React from "react";
import { ComponentStory } from "@storybook/react";
import { SidebarFooter } from "./SidebarFooter";

const Template: ComponentStory<typeof SidebarFooter> = (args) => <SidebarFooter {...args} />;

export const Default: ComponentStory<typeof SidebarFooter> = Template.bind({});
Default.args = {
    
};
