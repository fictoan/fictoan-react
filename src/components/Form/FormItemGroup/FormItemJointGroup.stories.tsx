import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FormItemJointGroup } from "./FormItemJointGroup";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/FormItemJointGroup",
    component: FormItemJointGroup,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof FormItemJointGroup>;

const Template: ComponentStory<typeof FormItemJointGroup> = (args) => <FormItemJointGroup {...args} />;


export const Default: ComponentStory<typeof FormItemJointGroup> = Template.bind({});
Default.args = {
    
};
