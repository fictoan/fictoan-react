import React from "react";
import { ComponentStory } from "@storybook/react";
import { InputField } from "./InputField";

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;


export const Default: ComponentStory<typeof InputField> = Template.bind({});
Default.args = {
    
};
