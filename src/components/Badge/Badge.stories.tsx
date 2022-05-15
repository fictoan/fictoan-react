import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { Badge } from "./Badge";

const Template: FictoanStory<typeof Badge> = (args) => <Badge {...args} />;
Template.displayName = Badge.displayName;

export const Custom: FictoanStory<typeof Badge> = createStoryFromTemplate(Template);
Custom.args = {
    bgColour: "green-10",
    textColour: "green",
    shape: "curved",
};
