import React from "react";
import { ComponentStory } from "@storybook/react";

import { Element } from "./Element";

const Template: ComponentStory<typeof Element> = (args) => <Element {...args} />;


export const Default: ComponentStory<typeof Element> = Template.bind({});
Default.args = {
    
};
