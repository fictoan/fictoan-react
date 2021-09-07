import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Spinner } from "./Spinner";
import { CommonArgTypes } from "../../utils/storyUtils";

export default {
    title: "Components/Spinner",
    component: Spinner,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;


export const Default: ComponentStory<typeof Spinner> = Template.bind({});
Default.args = {
    
};
