import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { SidebarItem } from "./SidebarItem";

const Template: FictoanStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />;
Template.displayName = SidebarItem.displayName;

export const Default: FictoanStory<typeof SidebarItem> = createStoryFromTemplate(Template);
Default.args = {
    
};
