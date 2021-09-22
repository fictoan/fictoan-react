import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { Tag } from "./Tag";

const Template: FictoanStory<typeof Tag> = (args) => <Tag {...args} />;
Template.displayName = Tag.displayName;

export const Default: FictoanStory<typeof Tag> = createStoryFromTemplate(Template);
Default.args = {
    children: "Success",
    textColor: "teal",
    shape: "rounded"
};
