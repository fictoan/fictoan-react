import React from "react";
import { ComponentStory } from "@storybook/react";
import { InputLabel } from "./InputLabel";

const Template: ComponentStory<typeof InputLabel> = (args) => <InputLabel {...args} />;


export const Default: ComponentStory<typeof InputLabel> = Template.bind({});
Default.args = {
    
};
