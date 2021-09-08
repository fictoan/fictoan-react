import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { InputField } from "./InputField";

const Template: FictoanStory<typeof InputField> = (args) => <InputField {...args} />;
Template.displayName = InputField.displayName;

export const Default: FictoanStory<typeof InputField> = createStoryFromTemplate(Template);
Default.args = {
    
};
