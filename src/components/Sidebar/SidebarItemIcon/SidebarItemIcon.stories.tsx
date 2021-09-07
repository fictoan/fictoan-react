import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SidebarItemIcon } from "./SidebarItemIcon";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/SidebarItemIcon",
    component: SidebarItemIcon,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof SidebarItemIcon>;

const Template: ComponentStory<typeof SidebarItemIcon> = (args) => <SidebarItemIcon {...args} />;


export const Default: ComponentStory<typeof SidebarItemIcon> = Template.bind({});
Default.args = {
    
};
