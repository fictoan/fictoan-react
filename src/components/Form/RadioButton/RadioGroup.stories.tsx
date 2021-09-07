import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RadioGroup } from "./RadioGroup";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/RadioGroup",
    component: RadioGroup,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;


export const Default: ComponentStory<typeof RadioGroup> = Template.bind({});
Default.args = {
    
};
