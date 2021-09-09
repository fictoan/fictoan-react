import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { SidebarHeader } from "./SidebarHeader";

const Template: FictoanStory<typeof SidebarHeader> = (args) => <SidebarHeader {...args} />;
Template.displayName = SidebarHeader.displayName;

export const Default: FictoanStory<typeof SidebarHeader> = createStoryFromTemplate(Template);
Default.args = {
    children: "This is the Sidebar Header"
};
