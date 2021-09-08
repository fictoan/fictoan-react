import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { RadioGroup } from "./RadioGroup";

const Template: FictoanStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;
Template.displayName = RadioGroup.displayName;

export const Default: FictoanStory<typeof RadioGroup> = createStoryFromTemplate(Template);
Default.args = {
    
};
