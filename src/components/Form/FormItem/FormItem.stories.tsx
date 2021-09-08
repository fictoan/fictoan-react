import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { FormItem } from "./FormItem";

const Template: FictoanStory<typeof FormItem> = (args) => <FormItem {...args} />;
Template.displayName = FormItem.displayName;

export const Default: FictoanStory<typeof FormItem> = createStoryFromTemplate(Template);
Default.args = {
    
};
