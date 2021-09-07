import React from "react";
import { ComponentStory } from "@storybook/react";

import { Card } from "./Card";

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;


export const Default: ComponentStory<typeof Card> = Template.bind({});
Default.args = {
    padding: "medium",
    shape: "rounded",
    shadow: "mild",
    children: "Hey there! This is a card"
};
