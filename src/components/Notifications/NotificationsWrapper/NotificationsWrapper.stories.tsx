import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { NotificationsWrapper } from "./NotificationsWrapper";
import { Default as NotificationItem } from "../NotificationsItem/NotificationItem.stories";

const Template: FictoanStory<typeof NotificationsWrapper> = (args) => <NotificationsWrapper {...args} />;
Template.displayName = NotificationsWrapper.displayName;

export const Default: FictoanStory<typeof NotificationsWrapper> = createStoryFromTemplate(Template);
Default.args = {
    children: <NotificationItem {...NotificationItem.args}></NotificationItem>
};
