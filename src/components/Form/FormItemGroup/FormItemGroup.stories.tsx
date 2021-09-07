import React from "react";
import { ComponentStory } from "@storybook/react";

import { FormItemGroup } from "./FormItemGroup";

const Template: ComponentStory<typeof FormItemGroup> = (args) => <FormItemGroup {...args} />;


export const Default: ComponentStory<typeof FormItemGroup> = Template.bind({});
Default.args = {
    
};
