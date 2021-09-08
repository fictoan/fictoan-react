import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { FormWrapper } from "./FormWrapper";

const Template: FictoanStory<typeof FormWrapper> = (args) => <FormWrapper {...args} />;
Template.displayName = FormWrapper.displayName;

export const Default: FictoanStory<typeof FormWrapper> = createStoryFromTemplate(Template);
Default.args = {
    
};
