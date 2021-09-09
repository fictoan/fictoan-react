import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { HRule } from "./HRule";

const Template: FictoanStory<typeof HRule> = (args) => <HRule {...args} />;
Template.displayName = HRule.displayName;

export const Primary: FictoanStory<typeof HRule> = createStoryFromTemplate(Template);
Primary.args = {
    kind: "primary"
};

export const Secondary: FictoanStory<typeof HRule> = createStoryFromTemplate(Template);
Secondary.args = {
    kind: "secondary"
};

export const Tertiary: FictoanStory<typeof HRule> = createStoryFromTemplate(Template);
Tertiary.args = {
    kind: "tertiary"
};
