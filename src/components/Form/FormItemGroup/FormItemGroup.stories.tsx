import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FormItemGroup } from "./FormItemGroup";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/FormItemGroup",
    component: FormItemGroup,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof FormItemGroup>;

const Template: ComponentStory<typeof FormItemGroup> = (args) => <FormItemGroup {...args} />;


export const Default: ComponentStory<typeof FormItemGroup> = Template.bind({});
Default.args = {
    
};
