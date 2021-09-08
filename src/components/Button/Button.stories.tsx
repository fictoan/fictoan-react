import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { Button } from "./Button";

const Template: FictoanStory<typeof Button> = (args) => <Button {...args} />;
Template.displayName = Button.displayName;

export const Primary: FictoanStory<typeof Button> = createStoryFromTemplate(Template);
Primary.args = {
    kind: "primary"
};

export const Secondary: FictoanStory<typeof Button> = createStoryFromTemplate(Template);
Secondary.args = {
    kind: "secondary"
};

export const Tertiary: FictoanStory<typeof Button> = createStoryFromTemplate(Template);
Tertiary.args = {
    kind: "tertiary"
};

export const Custom: FictoanStory<typeof Button> = createStoryFromTemplate(Template);
Custom.args = {
    kind: "custom",
    bgColour: "cyan",
    textColour: "black",
    shadow: "soft",
    shape: "rounded"
};
