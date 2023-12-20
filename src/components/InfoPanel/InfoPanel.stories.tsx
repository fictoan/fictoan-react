import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InfoPanel } from "./InfoPanel";
import { Heading } from "../Typography/Heading";

const meta: Meta<typeof InfoPanel> = {
    component: InfoPanel,
    tags: ["autodocs"],
    args: {
        children: "This is an InfoPanel.",
    },
    render: (args) => (
        <article>
            <Heading as="h2">Some content</Heading>

            <InfoPanel {...args} />
        </article>
    ),
    parameters: {
        docs: {
            description: {
                component: "This is an Info panel.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof InfoPanel>;

export const Default: Story = {
    args: {
        isOpen: true,
        children: <Heading as="h4">This is an InfoPanel</Heading>,
    },
};
