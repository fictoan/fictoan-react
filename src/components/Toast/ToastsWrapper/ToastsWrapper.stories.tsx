import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";

import { ToastItem } from "../ToastItem/ToastItem";
import { ToastsWrapper } from "./ToastsWrapper";
import { Default as ToastItemStory } from "../ToastItem/ToastItem.stories";

const Template: FictoanStory<typeof ToastsWrapper> = (args) => <ToastsWrapper {...args} />;
Template.displayName = ToastsWrapper.displayName;

export const Default: FictoanStory<typeof ToastsWrapper> = createStoryFromTemplate(Template);
Default.args = {
    children: <ToastItem {...ToastItemStory.args} />,
};
