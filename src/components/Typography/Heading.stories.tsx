import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { Heading } from "./Heading";

const Template: FictoanStory<typeof Heading> = (args) => <Heading {...args} />;
Template.displayName = Heading.displayName;

export const Default: FictoanStory<typeof Heading> = createStoryFromTemplate(Template);
Default.args = {
    as: "h1",
    children: "This is a heading"
};
