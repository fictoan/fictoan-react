import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { Card } from "./Card";

const Template: FictoanStory<typeof Card> = (args) => <Card {...args} />;
Template.displayName = Card.displayName;

export const Default: FictoanStory<typeof Card> = createStoryFromTemplate(Template);
Default.args = {
    padding: "medium",
    shape: "rounded",
    shadow: "mild",
    children: "Hey there! This is a card.",
};
