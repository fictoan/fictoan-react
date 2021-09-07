import React from "react";
import { ComponentStory } from "@storybook/react";
import { FormWrapper } from "./FormWrapper";

const Template: ComponentStory<typeof FormWrapper> = (args) => <FormWrapper {...args} />;


export const Default: ComponentStory<typeof FormWrapper> = Template.bind({});
Default.args = {
    
};
