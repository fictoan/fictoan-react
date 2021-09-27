import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { Spinner } from "./Spinner";

const Template: FictoanStory<typeof Spinner> = (args) => <Spinner {...args} />;
Template.displayName = Spinner.displayName;

export const Default: FictoanStory<typeof Spinner> = createStoryFromTemplate(Template);
Default.args = {
    
};
