import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Heading } from "./Heading";
import { CommonArgTypes } from "../../utils/storyUtils";

export default {
    title: "Components/Heading",
    component: Heading,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;


export const Default: ComponentStory<typeof Heading> = Template.bind({});
Default.args = {
    
};
