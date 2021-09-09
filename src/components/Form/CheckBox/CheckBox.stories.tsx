import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { CheckBox } from "./CheckBox";

const Template: FictoanStory<typeof CheckBox> = (args) => <CheckBox {...args} />;
Template.displayName = CheckBox.displayName;

export const Default: FictoanStory<typeof CheckBox> = createStoryFromTemplate(Template);
Default.args = {
    label: "Accept terms & conditions",
    id: "accept-checkbox",
    name: "accept-terms",
    required: true
};
