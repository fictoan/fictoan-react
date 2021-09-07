import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tabs } from "./Tabs";
import { CommonArgTypes } from "../../utils/storyUtils";

export default {
    title: "Components/Tabs",
    component: Tabs,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;


export const Default: ComponentStory<typeof Tabs> = Template.bind({});
Default.args = {
    
};
