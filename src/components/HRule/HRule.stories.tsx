import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { HRule } from "./HRule";

const Template: FictoanStory<typeof HRule> = (args) => <HRule {...args} />;
Template.displayName = HRule.displayName;

export const Default: FictoanStory<typeof HRule> = createStoryFromTemplate(Template);
Default.args = {
    
};
