import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { SidebarLink } from "./SidebarLink";

const Template: FictoanStory<typeof SidebarLink> = (args) => <SidebarLink {...args} />;
Template.displayName = SidebarLink.displayName;

export const Default: FictoanStory<typeof SidebarLink> = createStoryFromTemplate(Template);
Default.args = {
    children: "This is the Sidebar Link"
};
