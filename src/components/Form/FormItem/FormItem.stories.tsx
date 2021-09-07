import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FormItem } from "./FormItem";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/FormItem",
    component: FormItem,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof FormItem>;

const Template: ComponentStory<typeof FormItem> = (args) => <FormItem {...args} />;


export const Default: ComponentStory<typeof FormItem> = Template.bind({});
Default.args = {
    
};
