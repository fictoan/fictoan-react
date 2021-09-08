import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { Switch } from "./Switch";

const Template: FictoanStory<typeof Switch> = (args) => <Switch {...args} />;
Template.displayName = Switch.displayName;

export const Default: FictoanStory<typeof Switch> = createStoryFromTemplate(Template);
Default.args = {
    
};
