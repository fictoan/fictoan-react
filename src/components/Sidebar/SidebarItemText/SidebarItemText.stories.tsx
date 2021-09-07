import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SidebarItemText } from "./SidebarItemText";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/SidebarItemText",
    component: SidebarItemText,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof SidebarItemText>;

const Template: ComponentStory<typeof SidebarItemText> = (args) => <SidebarItemText {...args} />;


export const Default: ComponentStory<typeof SidebarItemText> = Template.bind({});
Default.args = {
    
};
