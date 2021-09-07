import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SidebarFooter } from "./SidebarFooter";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/SidebarFooter",
    component: SidebarFooter,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof SidebarFooter>;

const Template: ComponentStory<typeof SidebarFooter> = (args) => <SidebarFooter {...args} />;


export const Default: ComponentStory<typeof SidebarFooter> = Template.bind({});
Default.args = {
    
};
