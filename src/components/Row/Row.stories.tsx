import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { Row } from "./Row";
import { Default as Portion } from "../Portion/Portion.stories";
import { Default as Element } from "../Element/Element.stories";

const Template: FictoanStory<typeof Row> = (args) => <Row {...args} />;
Template.displayName = Row.displayName;

export const Default: FictoanStory<typeof Row> = createStoryFromTemplate(Template);
Default.args = {};

export const WithPortions: FictoanStory<typeof Row> = createStoryFromTemplate(Template);
WithPortions.args = {
    children: [
        <Portion desktopSpan="8">
            <Element as="div" bgColour="slate-20" padding="micro"></Element>
        </Portion>,
        <Portion desktopSpan="16">
            <Element as="div" bgColour="slate-20" padding="micro"></Element>
        </Portion>,
        <Portion desktopSpan="16">
            <Element as="div" bgColour="slate-20" padding="micro"></Element>
        </Portion>,
        <Portion desktopSpan="8">
            <Element as="div" bgColour="slate-20" padding="micro"></Element>
        </Portion>,
        <Portion desktopSpan="4">
            <Element as="div" bgColour="slate-20" padding="micro"></Element>
        </Portion>,
        <Portion desktopSpan="4">
            <Element as="div" bgColour="slate-20" padding="micro"></Element>
        </Portion>,
        <Portion desktopSpan="12">
            <Element as="div" bgColour="slate-20" padding="micro"></Element>
        </Portion>,
        <Portion desktopSpan="4">
            <Element as="div" bgColour="slate-20" padding="micro"></Element>
        </Portion>,
    ],
};
