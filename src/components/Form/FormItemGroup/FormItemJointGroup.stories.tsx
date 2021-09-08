import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { FormItemJointGroup } from "./FormItemJointGroup";

const Template: FictoanStory<typeof FormItemJointGroup> = (args) => <FormItemJointGroup {...args} />;
Template.displayName = FormItemJointGroup.displayName;

export const Default: FictoanStory<typeof FormItemJointGroup> = createStoryFromTemplate(Template);
Default.args = {
    
};
