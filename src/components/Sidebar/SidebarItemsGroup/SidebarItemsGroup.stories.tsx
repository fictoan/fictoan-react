import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SidebarItemsGroup } from "./SidebarItemsGroup";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/SidebarItemsGroup",
    component: SidebarItemsGroup,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof SidebarItemsGroup>;

const Template: ComponentStory<typeof SidebarItemsGroup> = (args) => <SidebarItemsGroup {...args} />;


export const Default: ComponentStory<typeof SidebarItemsGroup> = Template.bind({});
Default.args = {
    
};
