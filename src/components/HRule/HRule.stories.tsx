import React from "react";
import { ComponentStory } from "@storybook/react";
import { HRule } from "./HRule";

const Template: ComponentStory<typeof HRule> = (args) => <HRule {...args} />;


export const Default: ComponentStory<typeof HRule> = Template.bind({});
Default.args = {
    
};
