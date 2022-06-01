import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { RadioGroup } from "./RadioGroup";

const Template: FictoanStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;
Template.displayName = RadioGroup.displayName;

export const Default: FictoanStory<typeof RadioGroup> = createStoryFromTemplate(Template);
Default.args = {
    label: "Options",
    id: "radio-buttons",
    name: "radio-input-group-demo",
    options: [
        {
            label: "Option A",
            value: "Option A",
            id: "radio-option-a",
        },
        {
            label: "Option B",
            value: "Option B",
            id: "radio-option-b",
        },
    ],
    helpText: "Select an option",
};
