import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InputField } from "./InputField";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/InputField",
    component: InputField,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;


export const Default: ComponentStory<typeof InputField> = Template.bind({});
Default.args = {
    
};
