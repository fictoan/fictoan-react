import React from "react";
import { ComponentStory } from "@storybook/react";
import { RadioButton } from "./RadioButton";

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;


export const Default: ComponentStory<typeof RadioButton> = Template.bind({});
Default.args = {
    
};
