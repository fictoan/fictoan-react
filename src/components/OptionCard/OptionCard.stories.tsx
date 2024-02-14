import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { OptionCardsGroup, OptionCard } from "./OptionCard";
import { Text } from "../Typography/Text";

const meta: Meta<typeof OptionCardsGroup> = {
    title: 'Components/OptionCardsGroup',
    component: OptionCardsGroup,
    tags: ["autodocs"],
    args: {
        allowMultipleSelections: false,
        showTickIcon: true,
    },
    parameters: {
        docs: {
            description: {
                component: "A group of option cards allowing for single or multiple selections.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof OptionCardsGroup>;

export const SingleSelection: Story = {
    render: (args) => (
        <OptionCardsGroup {...args}>
            <OptionCard id="option1" padding="micro">
                <Text>Option 1</Text>
            </OptionCard>
            <OptionCard id="option2" padding="micro">
                <Text>Option 2</Text>
            </OptionCard>
            <OptionCard id="option3" padding="micro">
                <Text>Option 3</Text>
            </OptionCard>
        </OptionCardsGroup>
    ),
    args: {
        allowMultipleSelections: false,
        showTickIcon: true,
    },
    parameters: {
        docs: {
            description: {
                story: "A group of option cards configured for single selection.",
            },
        },
    },
};

export const MultipleSelection: Story = {
    render: (args) => (
        <OptionCardsGroup {...args}>
            <OptionCard id="option1" padding="micro">
                <Text>Option 1</Text>
            </OptionCard>
            <OptionCard id="option2" padding="micro">
                <Text>Option 2</Text>
            </OptionCard>
            <OptionCard id="option3" padding="micro">
                <Text>Option 3</Text>
            </OptionCard>
        </OptionCardsGroup>
    ),
    args: {
        allowMultipleSelections: true,
        showTickIcon: true,
    },
    parameters: {
        docs: {
            description: {
                story: "A group of option cards configured for multiple selections.",
            },
        },
    },
};
