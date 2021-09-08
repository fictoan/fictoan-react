import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { Select } from "./Select";

const Template: FictoanStory<typeof Select> = (args) => <Select {...args} />;
Template.displayName = Select.displayName;

export const Default: FictoanStory<typeof Select> = createStoryFromTemplate(Template);
Default.args = {
    
};
