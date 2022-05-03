import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { BottomDrawer } from "./BottomDrawer";

const Template: FictoanStory<typeof BottomDrawer> = (args) => <BottomDrawer {...args} />;
Template.displayName = BottomDrawer.displayName;

export const Default: FictoanStory<typeof BottomDrawer> = createStoryFromTemplate(Template);
Default.args = {
    children: "This is an BottomDrawer"
};
