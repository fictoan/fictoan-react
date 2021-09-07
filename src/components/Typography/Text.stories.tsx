import React from "react";
import { ComponentStory } from "@storybook/react";
import { Text } from "./Text";

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;


export const Default: ComponentStory<typeof Text> = Template.bind({});
Default.args = {
    
};
