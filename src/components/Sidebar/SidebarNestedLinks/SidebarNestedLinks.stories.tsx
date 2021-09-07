import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SidebarNestedLinks } from "./SidebarNestedLinks";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/SidebarNestedLinks",
    component: SidebarNestedLinks,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof SidebarNestedLinks>;

const Template: ComponentStory<typeof SidebarNestedLinks> = (args) => <SidebarNestedLinks {...args} />;


export const Default: ComponentStory<typeof SidebarNestedLinks> = Template.bind({});
Default.args = {
    
};
