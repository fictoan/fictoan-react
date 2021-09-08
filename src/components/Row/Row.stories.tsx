import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { Row } from "./Row";

const Template: FictoanStory<typeof Row> = (args) => <Row {...args} />;
Template.displayName = Row.displayName;

export const Default: FictoanStory<typeof Row> = createStoryFromTemplate(Template);
Default.args = {
    
};
