import React from "react";
import { ComponentStory } from "@storybook/react";

import { Switch } from "./Switch";

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;


export const Default: ComponentStory<typeof Switch> = Template.bind({});
Default.args = {
    
};
