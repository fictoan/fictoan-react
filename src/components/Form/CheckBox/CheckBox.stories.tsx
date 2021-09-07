import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CheckBox } from "./CheckBox";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/CheckBox",
    component: CheckBox,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;


export const Default: ComponentStory<typeof CheckBox> = Template.bind({});
Default.args = {
    
};
