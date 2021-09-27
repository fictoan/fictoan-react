import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { SidebarItemIcon } from "./SidebarItemIcon";

const Template: FictoanStory<typeof SidebarItemIcon> = (args) => <SidebarItemIcon {...args} />;
Template.displayName = SidebarItemIcon.displayName;

export const Default: FictoanStory<typeof SidebarItemIcon> = createStoryFromTemplate(Template);
Default.args = {};
