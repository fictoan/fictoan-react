import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FormWrapper } from "./FormWrapper";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/FormWrapper",
    component: FormWrapper,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof FormWrapper>;

const Template: ComponentStory<typeof FormWrapper> = (args) => <FormWrapper {...args} />;


export const Default: ComponentStory<typeof FormWrapper> = Template.bind({});
Default.args = {
    
};
