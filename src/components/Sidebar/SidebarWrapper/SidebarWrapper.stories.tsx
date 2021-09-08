import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { SidebarWrapper } from "./SidebarWrapper";

const Template: FictoanStory<typeof SidebarWrapper> = (args) => <SidebarWrapper {...args} />;
Template.displayName = SidebarWrapper.displayName;

export const Default: FictoanStory<typeof SidebarWrapper> = createStoryFromTemplate(Template);
Default.args = {
    
};
