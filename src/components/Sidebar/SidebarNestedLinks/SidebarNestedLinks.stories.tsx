import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { SidebarNestedLinks } from "./SidebarNestedLinks";

const Template: FictoanStory<typeof SidebarNestedLinks> = (args) => <SidebarNestedLinks {...args} />;
Template.displayName = SidebarNestedLinks.displayName;

export const Default: FictoanStory<typeof SidebarNestedLinks> = createStoryFromTemplate(Template);
Default.args = {
    
};
