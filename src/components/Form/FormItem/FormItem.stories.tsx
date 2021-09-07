import React from "react";
import { ComponentStory } from "@storybook/react";

import { FormItem } from "./FormItem";

const Template: ComponentStory<typeof FormItem> = (args) => <FormItem {...args} />;


export const Default: ComponentStory<typeof FormItem> = Template.bind({});
Default.args = {
    
};
