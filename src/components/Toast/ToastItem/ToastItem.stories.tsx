import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { ToastItem } from "./ToastItem";

const Template: FictoanStory<typeof ToastItem> = (args) => <ToastItem {...args} />;
Template.displayName = ToastItem.displayName;

export const Default: FictoanStory<typeof ToastItem> = createStoryFromTemplate(Template);
Default.args = {
    show    : true,
    showFor : 4000,
};
