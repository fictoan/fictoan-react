import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RadioButton } from "./RadioButton";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/RadioButton",
    component: RadioButton,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;


export const Default: ComponentStory<typeof RadioButton> = Template.bind({});
Default.args = {
    
};
