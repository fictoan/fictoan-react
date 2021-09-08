import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { FormItemGroup } from "./FormItemGroup";

const Template: FictoanStory<typeof FormItemGroup> = (args) => <FormItemGroup {...args} />;
Template.displayName = FormItemGroup.displayName;

export const Default: FictoanStory<typeof FormItemGroup> = createStoryFromTemplate(Template);
Default.args = {
    
};
