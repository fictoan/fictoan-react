import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { SidebarItemsGroupHeader } from "./SidebarItemsGroupHeader";

const Template: FictoanStory<typeof SidebarItemsGroupHeader> = (args) => <SidebarItemsGroupHeader {...args} />;
Template.displayName = SidebarItemsGroupHeader.displayName;

export const Default: FictoanStory<typeof SidebarItemsGroupHeader> = createStoryFromTemplate(Template);
Default.args = {
    children: "This is the Sidebar Items Group Header"
};
