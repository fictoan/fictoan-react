import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SidebarHeader } from "./SidebarHeader";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/SidebarHeader",
    component: SidebarHeader,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof SidebarHeader>;

const Template: ComponentStory<typeof SidebarHeader> = (args) => <SidebarHeader {...args} />;


export const Default: ComponentStory<typeof SidebarHeader> = Template.bind({});
Default.args = {
    
};
