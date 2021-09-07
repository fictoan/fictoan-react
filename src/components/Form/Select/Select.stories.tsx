import React from "react";
import { ComponentStory } from "@storybook/react";
import { Select } from "./Select";

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;


export const Default: ComponentStory<typeof Select> = Template.bind({});
Default.args = {
    
};
