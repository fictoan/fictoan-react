import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { Tabs } from "./Tabs";

const Template: FictoanStory<typeof Tabs> = (args) => <Tabs {...args} />;
Template.displayName = Tabs.displayName;

export const Default: FictoanStory<typeof Tabs> = createStoryFromTemplate(Template);
Default.args = {
    tabs: Array.from({ length: 3 }).map((_, i) => ({
        key: `Tab ${i + 1}`,
        label: `Tab ${i + 1}`,
        content: `This is content for Tab ${i + 1}`,
    })),
};
