import React from "react";
import { ComponentStory } from "@storybook/react";
import { Portion } from "./Portion";

const Template: ComponentStory<typeof Portion> = (args) => <Portion {...args} />;


export const Default: ComponentStory<typeof Portion> = Template.bind({});
Default.args = {
    
};
