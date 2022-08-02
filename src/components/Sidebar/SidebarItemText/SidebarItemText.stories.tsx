import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { SidebarItemText } from "./SidebarItemText";

const Template: FictoanStory<typeof SidebarItemText> = (args) => <SidebarItemText {...args} />;
Template.displayName = SidebarItemText.displayName;

export const Default: FictoanStory<typeof SidebarItemText> = createStoryFromTemplate(Template);
Default.args = {
    linkText: "This is the Sidebar Item text",
};
