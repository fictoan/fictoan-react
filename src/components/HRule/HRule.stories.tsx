import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HRule } from "./HRule";
import { CommonArgTypes } from "../../utils/storyUtils";

export default {
    title: "Components/HRule",
    component: HRule,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof HRule>;

const Template: ComponentStory<typeof HRule> = (args) => <HRule {...args} />;


export const Default: ComponentStory<typeof HRule> = Template.bind({});
Default.args = {
    
};
