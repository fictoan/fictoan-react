import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SidebarWrapper } from "./SidebarWrapper";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/SidebarWrapper",
    component: SidebarWrapper,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof SidebarWrapper>;

const Template: ComponentStory<typeof SidebarWrapper> = (args) => <SidebarWrapper {...args} />;


export const Default: ComponentStory<typeof SidebarWrapper> = Template.bind({});
Default.args = {
    
};
