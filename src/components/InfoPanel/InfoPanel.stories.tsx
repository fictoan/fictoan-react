import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { InfoPanel } from "./InfoPanel";

const Template: FictoanStory<typeof InfoPanel> = (args) => <InfoPanel {...args} />;
Template.displayName = InfoPanel.displayName;

export const Default: FictoanStory<typeof InfoPanel> = createStoryFromTemplate(Template);
Default.args = {
    children: "This is an InfoPanel"
};
