import React from "react";
import { ComponentStory } from "@storybook/react";
import { Spinner } from "./Spinner";

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;


export const Default: ComponentStory<typeof Spinner> = Template.bind({});
Default.args = {
    
};
