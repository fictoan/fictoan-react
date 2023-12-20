import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
    component: Card,
    tags: ["autodocs"],
    args: {
        children: "Hey there! This is a card.",
    },
    parameters: {
        docs: {
            description: {
                component: "This is a Card.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        padding: "medium",
        shape: "rounded",
        shadow: "mild",
    }
};
