import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { Element } from "./Element";

const Template: FictoanStory<typeof Element> = (args) => <Element {...args} />;
Template.displayName = "Element";

export const Default: FictoanStory<typeof Element> = createStoryFromTemplate(Template);
Default.args = {
    borderColor: "slate-20",
    padding: "micro",
    children: "This is a div"
};
