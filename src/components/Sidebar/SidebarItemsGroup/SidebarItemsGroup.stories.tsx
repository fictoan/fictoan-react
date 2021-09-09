import React from "react";
import { Default as SidebarItem } from "../SidebarItem/SidebarItem.stories";
import { Default as SidebarItemText } from "../SidebarItemText/SidebarItemText.stories";
import { Default as SidebarItemsGroupHeader } from "../SidebarItemsGroupHeader/SidebarItemsGroupHeader.stories";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { SidebarItemsGroup } from "./SidebarItemsGroup";

const Template: FictoanStory<typeof SidebarItemsGroup> = (args) => <SidebarItemsGroup {...args} />;
Template.displayName = SidebarItemsGroup.displayName;

export const Default: FictoanStory<typeof SidebarItemsGroup> = createStoryFromTemplate(Template);
Default.args = {
    children: [
        <SidebarItemsGroupHeader>Item group summary</SidebarItemsGroupHeader>,
        <SidebarItem>
            <SidebarItemText linkText="Sidebar Item 1"></SidebarItemText>
        </SidebarItem>,
        <SidebarItem>
            <SidebarItemText linkText="Sidebar Item 2"></SidebarItemText>
        </SidebarItem>,
    ],
};
