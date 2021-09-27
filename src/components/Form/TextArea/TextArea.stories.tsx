import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { TextArea } from "./TextArea";

const Template: FictoanStory<typeof TextArea> = (args) => <TextArea {...args} />;
Template.displayName = TextArea.displayName;

export const Default: FictoanStory<typeof TextArea> = createStoryFromTemplate(Template);
Default.args = {
    label: "Paragraph",
    rows: 5,
    placeholder: "Enter long text here",
    helpText: "This field can only contain a string"
};
