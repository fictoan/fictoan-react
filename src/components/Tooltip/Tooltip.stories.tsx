import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { Tooltip } from "./Tooltip";
import { Primary as Button } from "../Button/Button.stories";

const Template: FictoanStory<typeof Tooltip> = (args) => <Tooltip {...args} />;
Template.displayName = Tooltip.displayName;

export const Default: FictoanStory<typeof Tooltip> = createStoryFromTemplate(Template);
Default.args = {
    label: "Testing this really really long description",
    position: "right",
    bgColor: "grey",
    textColor: "white",
    borderColor: "transparent",
    shape: "rounded",
    shadow: "mild",
    children: <Button {...Button.args}>Test</Button>
};
