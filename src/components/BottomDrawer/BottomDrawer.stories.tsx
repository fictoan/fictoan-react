import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { BottomDrawer } from "./BottomDrawer";
import { Heading } from "../Typography/Heading";

const Template: FictoanStory<typeof BottomDrawer> = (args) => (
    <article>
        <Heading as="h2">Some content</Heading>

        <BottomDrawer overlayOpacity={0.19} {...args} />
    </article>
) ;
Template.displayName = BottomDrawer.displayName;

export const Default: FictoanStory<typeof BottomDrawer> = createStoryFromTemplate(Template);
Default.args = {
    isOpen : true,
    children: <Heading as="h1" margin="tiny">Some heading</Heading>
};
