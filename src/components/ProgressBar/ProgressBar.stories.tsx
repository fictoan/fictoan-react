import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { ProgressBar } from "./ProgressBar";

const Template: FictoanStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;
Template.displayName = ProgressBar.displayName;

export const Default: FictoanStory<typeof ProgressBar> = createStoryFromTemplate(Template);
Default.args = {
    
};
