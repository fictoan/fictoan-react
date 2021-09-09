import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { Text } from "./Text";

const Template: FictoanStory<typeof Text> = (args) => <Text {...args} />;
Template.displayName = Text.displayName;

export const Default: FictoanStory<typeof Text> = createStoryFromTemplate(Template);
Default.args = {
    children: "This is some text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda cupiditate eos illum."
};
