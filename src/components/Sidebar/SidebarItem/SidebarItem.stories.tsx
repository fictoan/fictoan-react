import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SidebarItem } from "./SidebarItem";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/SidebarItem",
    component: SidebarItem,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />;


export const Default: ComponentStory<typeof SidebarItem> = Template.bind({});
Default.args = {
    
};
