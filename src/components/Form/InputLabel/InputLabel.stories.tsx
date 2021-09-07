import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InputLabel } from "./InputLabel";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/InputLabel",
    component: InputLabel,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof InputLabel>;

const Template: ComponentStory<typeof InputLabel> = (args) => <InputLabel {...args} />;


export const Default: ComponentStory<typeof InputLabel> = Template.bind({});
Default.args = {
    
};
