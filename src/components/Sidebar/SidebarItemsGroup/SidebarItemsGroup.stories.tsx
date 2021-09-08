import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { SidebarItemsGroup } from "./SidebarItemsGroup";

const Template: FictoanStory<typeof SidebarItemsGroup> = (args) => <SidebarItemsGroup {...args} />;
Template.displayName = SidebarItemsGroup.displayName;

export const Default: FictoanStory<typeof SidebarItemsGroup> = createStoryFromTemplate(Template);
Default.args = {
    
};
