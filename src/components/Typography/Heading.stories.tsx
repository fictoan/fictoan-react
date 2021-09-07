import React from "react";
import { ComponentStory } from "@storybook/react";
import { Heading } from "./Heading";

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;


export const Default: ComponentStory<typeof Heading> = Template.bind({});
Default.args = {
    
};
