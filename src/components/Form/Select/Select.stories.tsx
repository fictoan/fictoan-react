import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select } from "./Select";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/Select",
    component: Select,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;


export const Default: ComponentStory<typeof Select> = Template.bind({});
Default.args = {
    
};
