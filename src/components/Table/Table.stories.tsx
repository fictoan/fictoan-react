import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { Table } from "./Table";
import { Element } from "../Element/Element";

const Template: FictoanStory<typeof Table> = (args) => <Table {...args} />;
Template.displayName = Table.displayName;

export const Default: FictoanStory<typeof Table> = createStoryFromTemplate(Template);
Default.args = {
    children: [
        <Element as="thead">
            <Element as="tr">
                <Element as="th" padding="nano">S.No</Element>
                <Element as="th" padding="nano">Name</Element>
                <Element as="th" padding="nano">Age</Element>
            </Element>
        </Element>,
        <Element as="tbody">
            <Element as="tr">
                <Element as="td" padding="nano">1</Element>
                <Element as="td" padding="nano">ABC</Element>
                <Element as="td" padding="nano">20</Element>
            </Element>
            <Element as="tr">
                <Element as="td" padding="nano">2</Element>
                <Element as="td" padding="nano">DEF</Element>
                <Element as="td" padding="nano">21</Element>
            </Element>
            <Element as="tr">
                <Element as="td" padding="nano">3</Element>
                <Element as="td" padding="nano">XYZ</Element>
                <Element as="td" padding="nano">24</Element>
            </Element>
        </Element>,
    ]
};
