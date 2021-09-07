import React from "react";
import { ComponentStory } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;


export const Default: ComponentStory<typeof ProgressBar> = Template.bind({});
Default.args = {
    
};
