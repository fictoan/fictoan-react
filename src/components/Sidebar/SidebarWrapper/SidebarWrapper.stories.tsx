import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { SidebarWrapper } from "./SidebarWrapper";
import { Default as SidebarHeader } from "../SidebarHeader/SidebarHeader.stories";
import { Default as SidebarFooter } from "../SidebarFooter/SidebarFooter.stories";
import { Default as SidebarItem } from "../SidebarItem/SidebarItem.stories";
import { Default as SidebarItemText } from "../SidebarItemText/SidebarItemText.stories";
import { Default as SidebarItemIcon } from "../SidebarItemIcon/SidebarItemIcon.stories";
import { Default as ExpandableContent } from "../../ExpandableContent/ExpandableContent.stories";

const Template: FictoanStory<typeof SidebarWrapper> = (args) => <SidebarWrapper {...args} />;
Template.displayName = SidebarWrapper.displayName;

export const Default: FictoanStory<typeof SidebarWrapper> = createStoryFromTemplate(Template);
Default.args = {
    children: [
        <SidebarHeader>Sidebar Header</SidebarHeader>,

        <SidebarItem hasAlert>
            <SidebarItemIcon></SidebarItemIcon>
            <SidebarItemText linkText="Item 1"></SidebarItemText>
        </SidebarItem>,
        <SidebarItem>
            <SidebarItemIcon></SidebarItemIcon>
            <SidebarItemText linkText="Item 2"></SidebarItemText>
        </SidebarItem>,
        <SidebarItem>
            <SidebarItemIcon></SidebarItemIcon>
            <SidebarItemText linkText="Item 3"></SidebarItemText>
        </SidebarItem>,

        <ExpandableContent
            summary={
                <SidebarItem>
                    <SidebarItemIcon></SidebarItemIcon>
                    <SidebarItemText linkText="Item Summary" weight="600"></SidebarItemText>
                </SidebarItem>
            }
        >
            <SidebarItem>
                <SidebarItemIcon></SidebarItemIcon>
                <SidebarItemText linkText="Nested Item 1"></SidebarItemText>
            </SidebarItem>
            <SidebarItem>
                <SidebarItemIcon></SidebarItemIcon>
                <SidebarItemText linkText="Nested Item 2"></SidebarItemText>
            </SidebarItem>
        </ExpandableContent>,

        <SidebarFooter padding="micro">Sidebar footer</SidebarFooter>,
    ],
};
