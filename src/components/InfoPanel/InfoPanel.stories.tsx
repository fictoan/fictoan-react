import React from "react";
import { ComponentStory } from "@storybook/react";
import { InfoPanel } from "./InfoPanel";

const Template: ComponentStory<typeof InfoPanel> = (args) => <InfoPanel {...args} />;


export const Default: ComponentStory<typeof InfoPanel> = Template.bind({});
Default.args = {
    
};
