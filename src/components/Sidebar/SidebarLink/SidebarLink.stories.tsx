import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SidebarLink } from "./SidebarLink";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/SidebarLink",
    component: SidebarLink,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof SidebarLink>;

const Template: ComponentStory<typeof SidebarLink> = (args) => <SidebarLink {...args} />;


export const Default: ComponentStory<typeof SidebarLink> = Template.bind({});
Default.args = {
    
};
