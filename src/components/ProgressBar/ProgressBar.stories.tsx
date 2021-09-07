import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";
import { CommonArgTypes } from "../../utils/storyUtils";

export default {
    title: "Components/ProgressBar",
    component: ProgressBar,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;


export const Default: ComponentStory<typeof ProgressBar> = Template.bind({});
Default.args = {
    
};
