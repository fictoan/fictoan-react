import React from "react";
import { ComponentStory } from "@storybook/react";
import { FormItemJointGroup } from "./FormItemJointGroup";

const Template: ComponentStory<typeof FormItemJointGroup> = (args) => <FormItemJointGroup {...args} />;


export const Default: ComponentStory<typeof FormItemJointGroup> = Template.bind({});
Default.args = {
    
};
