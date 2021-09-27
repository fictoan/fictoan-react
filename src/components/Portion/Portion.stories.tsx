import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { Portion } from "./Portion";
import { Row } from "../Row/Row";
import { Default as Element } from "../Element/Element.stories";

const Template: FictoanStory<typeof Portion> = (args) => <Portion {...args} />
Template.displayName = Portion.displayName;

export const Default: FictoanStory<typeof Portion> = createStoryFromTemplate(Template);
Default.args = {
    bgColor: "slate-10",
    padding: "small",
};

export const InsideRow: FictoanStory<typeof Portion> = (args) => (
    <Row>
        <Portion {...args}>
            <Element as="div" bgColour="slate-20" padding="micro" />
        </Portion>
    </Row>
);
InsideRow.displayName = Portion.displayName;
InsideRow.args = {
    desktopSpan: "8"
}
