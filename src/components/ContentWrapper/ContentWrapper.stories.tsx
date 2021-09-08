import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { ContentWrapper } from "./ContentWrapper";

const Template: FictoanStory<typeof ContentWrapper> = (args) => <ContentWrapper {...args} />;
Template.displayName = ContentWrapper.displayName;

export const Default: FictoanStory<typeof ContentWrapper> = createStoryFromTemplate(Template);
Default.args = {
    
};
