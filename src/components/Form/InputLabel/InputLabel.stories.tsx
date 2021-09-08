import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { InputLabel } from "./InputLabel";

const Template: FictoanStory<typeof InputLabel> = (args) => <InputLabel {...args} />;
Template.displayName = InputLabel.displayName;

export const Default: FictoanStory<typeof InputLabel> = createStoryFromTemplate(Template);
Default.args = {
    label: "Label for a field",
};
