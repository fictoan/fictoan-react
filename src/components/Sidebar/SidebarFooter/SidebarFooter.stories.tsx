import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { SidebarFooter } from "./SidebarFooter";

const Template: FictoanStory<typeof SidebarFooter> = (args) => <SidebarFooter {...args} />;
Template.displayName = SidebarFooter.displayName;

export const Default: FictoanStory<typeof SidebarFooter> = createStoryFromTemplate(Template);
Default.args = {
    
};
