import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Portion } from "./Portion";
import { Row } from "../Row/Row";
import { Element } from "../Element/Element";

const meta: Meta<typeof Portion> = {
    component: Portion,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a Portion.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Portion>;

export const InsideRow: Story = {
    args: {
        desktopSpan: "8",   
    },
    render: (args) => (
        <Row>
            <Portion {...args}>
                <Element as="div" bgColour="slate-light-20" padding="micro" />
            </Portion>
        </Row>
    ),
};
