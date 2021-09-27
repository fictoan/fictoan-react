import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { RadioButton } from "./RadioButton";

const Template: FictoanStory<typeof RadioButton> = (args) => <RadioButton {...args} />;
Template.displayName = RadioButton.displayName;

export const Default: FictoanStory<typeof RadioButton> = createStoryFromTemplate(Template);
Default.args = {
    label: "Option",
    id: "radio-button",
    name: "radio-button-demo"
};
