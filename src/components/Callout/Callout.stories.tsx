import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { Callout } from "./Callout";

const Template: FictoanStory<typeof Callout> = (args) => <Callout {...args} />;
Template.displayName = Callout.displayName;

export const Default: FictoanStory<typeof Callout> = createStoryFromTemplate(Template);
Default.args = {
    kind: "info",
    children: "Hello!",
};
