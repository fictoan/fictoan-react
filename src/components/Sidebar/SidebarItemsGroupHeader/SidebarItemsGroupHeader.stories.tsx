import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SidebarItemsGroupHeader } from "./SidebarItemsGroupHeader";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/SidebarItemsGroupHeader",
    component: SidebarItemsGroupHeader,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof SidebarItemsGroupHeader>;

const Template: ComponentStory<typeof SidebarItemsGroupHeader> = (args) => <SidebarItemsGroupHeader {...args} />;


export const Default: ComponentStory<typeof SidebarItemsGroupHeader> = Template.bind({});
Default.args = {
    
};
