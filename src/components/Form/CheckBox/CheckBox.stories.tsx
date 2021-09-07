import React from "react";
import { ComponentStory } from "@storybook/react";

import { CheckBox } from "./CheckBox";

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;


export const Default: ComponentStory<typeof CheckBox> = Template.bind({});
Default.args = {
    
};
