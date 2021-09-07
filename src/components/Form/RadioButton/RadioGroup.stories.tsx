import React from "react";
import { ComponentStory } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;


export const Default: ComponentStory<typeof RadioGroup> = Template.bind({});
Default.args = {
    
};
