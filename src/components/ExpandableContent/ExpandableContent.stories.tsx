import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { ExpandableContent } from "./ExpandableContent";

const Template: FictoanStory<typeof ExpandableContent> = (args) => <ExpandableContent {...args} />;
Template.displayName = ExpandableContent.displayName;

export const Default: FictoanStory<typeof ExpandableContent> = createStoryFromTemplate(Template);
Default.args = {
    summary: "Some summary text",
    children: ["Inner details"],
};
