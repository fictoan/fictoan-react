import React from "react";
import { Default as SidebarItemIcon } from "../SidebarItemIcon/SidebarItemIcon.stories";
import { Default as SidebarItemText } from "../SidebarItemText/SidebarItemText.stories";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { SidebarItem } from "./SidebarItem";

const Template: FictoanStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />;
Template.displayName = SidebarItem.displayName;

export const Default: FictoanStory<typeof SidebarItem> = createStoryFromTemplate(Template);
Default.args = {
    children: [
        <SidebarItemIcon {...SidebarItemIcon.args}></SidebarItemIcon>,
        <SidebarItemText linkText="Sidebar Item 1"></SidebarItemText>
    ]
};
