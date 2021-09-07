import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SidebarLinksWrapper } from "./SidebarLinksWrapper";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/SidebarLinksWrapper",
    component: SidebarLinksWrapper,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof SidebarLinksWrapper>;

const Template: ComponentStory<typeof SidebarLinksWrapper> = (args) => <SidebarLinksWrapper {...args} />;


export const Default: ComponentStory<typeof SidebarLinksWrapper> = Template.bind({});
Default.args = {
    
};
