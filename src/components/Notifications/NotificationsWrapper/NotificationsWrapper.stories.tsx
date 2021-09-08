import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { NotificationsWrapper } from "./NotificationsWrapper";

const Template: FictoanStory<typeof NotificationsWrapper> = (args) => <NotificationsWrapper {...args} />;
Template.displayName = NotificationsWrapper.displayName;

export const Default: FictoanStory<typeof NotificationsWrapper> = createStoryFromTemplate(Template);
Default.args = {
    
};
