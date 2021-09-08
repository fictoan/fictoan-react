import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { Portion } from "./Portion";

const Template: FictoanStory<typeof Portion> = (args) => <Portion {...args} />;
Template.displayName = Portion.displayName;

export const Default: FictoanStory<typeof Portion> = createStoryFromTemplate(Template);
Default.args = {
    
};
