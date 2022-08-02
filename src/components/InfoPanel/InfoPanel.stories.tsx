import React from "react";

import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { InfoPanel } from "./InfoPanel";
import { Heading } from "../Typography/Heading";

const Template: FictoanStory<typeof InfoPanel> = (args) => (
    <article>
        <Heading as="h2">Some content</Heading>

        <InfoPanel {...args} />
    </article>
);
Template.displayName = InfoPanel.displayName;

export const Default: FictoanStory<typeof InfoPanel> = createStoryFromTemplate(Template);
Default.args = {
    isOpen: true,
    children: <Heading as="h4">This is an InfoPanel</Heading>,
};
