import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { SidebarLinksWrapper } from "./SidebarLinksWrapper";

const Template: FictoanStory<typeof SidebarLinksWrapper> = (args) => <SidebarLinksWrapper {...args} />;
Template.displayName = SidebarLinksWrapper.displayName;

export const Default: FictoanStory<typeof SidebarLinksWrapper> = createStoryFromTemplate(Template);
Default.args = {
    
};
