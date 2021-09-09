import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { SidebarNestedLinks } from "./SidebarNestedLinks";
import { Default as SidebarLink } from "../SidebarLink/SidebarLink.stories";

const Template: FictoanStory<typeof SidebarNestedLinks> = (args) => <SidebarNestedLinks {...args} />;
Template.displayName = SidebarNestedLinks.displayName;

export const Default: FictoanStory<typeof SidebarNestedLinks> = createStoryFromTemplate(Template);
Default.args = {
    children: [
        <SidebarLink>Link 1</SidebarLink>,
        <SidebarLink>Link 2</SidebarLink>
    ]
};
