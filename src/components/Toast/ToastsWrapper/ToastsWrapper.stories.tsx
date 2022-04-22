import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { ToastsWrapper } from "./ToastsWrapper";
import { Default as Toast } from "../ToastsItem/Toast.stories";

const Template: FictoanStory<typeof ToastsWrapper> = (args) => <ToastsWrapper {...args} />;
Template.displayName = ToastsWrapper.displayName;

export const Default: FictoanStory<typeof ToastsWrapper> = createStoryFromTemplate(Template);
Default.args = {
    // @ts-ignore
    children: <Toast {...Toast.args}/>
};
