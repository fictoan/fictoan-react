import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { NotificationItem } from "./NotificationItem";

const Template: FictoanStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;
Template.displayName = NotificationItem.displayName;

export const Default: FictoanStory<typeof NotificationItem> = createStoryFromTemplate(Template);
Default.args = {
    
};
