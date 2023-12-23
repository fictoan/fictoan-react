import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Row } from "./Row";
import { Portion } from "../Portion/Portion";
import { Element } from "../Element/Element";

const meta: Meta<typeof Row> = {
    component: Row,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a Row.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Row>;

export const WithPortions: Story = {
    render: (args) => (
        <Row {...args}>
            <Portion desktopSpan="8">
                <Element as="div" bgColour="slate-20" padding="micro" />
            </Portion>
            <Portion desktopSpan="16">
                <Element as="div" bgColour="slate-20" padding="micro" />
            </Portion>
            <Portion desktopSpan="16">
                <Element as="div" bgColour="slate-20" padding="micro" />
            </Portion>
            <Portion desktopSpan="8">
                <Element as="div" bgColour="slate-20" padding="micro" />
            </Portion>
            <Portion desktopSpan="4">
                <Element as="div" bgColour="slate-20" padding="micro" />
            </Portion>
            <Portion desktopSpan="4">
                <Element as="div" bgColour="slate-20" padding="micro" />
            </Portion>
            <Portion desktopSpan="12">
                <Element as="div" bgColour="slate-20" padding="micro" />
            </Portion>
            <Portion desktopSpan="4">
                <Element as="div" bgColour="slate-20" padding="micro" />
            </Portion>
        </Row>
    ),
};
