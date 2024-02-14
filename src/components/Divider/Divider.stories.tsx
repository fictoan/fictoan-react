import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
    component: Divider,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is an Divider, plain and simple.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Primary: Story = {
    args: {
        kind: "primary",
    },
    parameters: {
        docs: {
            description: {
                story: "This is the primary Divider.",
            },
        },
    },
};

export const Secondary: Story = {
    args: {
        kind: "secondary",
    },
    parameters: {
        docs: {
            description: {
                story: "This is the secondary Divider.",
            },
        },
    },
};

export const Tertiary: Story = {
    args: {
        kind: "tertiary",
    },
    parameters: {
        docs: {
            description: {
                story: "This is the tertiary Divider.",
            },
        },
    },
};
