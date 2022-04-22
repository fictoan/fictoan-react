import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { Toast } from "./Toast";

const Template : FictoanStory<typeof Toast> = (args) => <Toast {...args} />;
Template.displayName = Toast.displayName;

export const Default : FictoanStory<typeof Toast> = createStoryFromTemplate(Template);
Default.args = {
    show     : true,
    timeout : 4000
};
