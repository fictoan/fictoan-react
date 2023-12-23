import type { Meta, StoryObj } from "@storybook/react";

import { HRule } from "./HRule";

const meta: Meta<typeof HRule> = {
    component: HRule,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is an HRule, plain and simple.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof HRule>;

export const Primary: Story = {
    args: {
        kind: "primary",
    },
    parameters: {
        docs: {
            description: {
                story: "This is the primary HRule.",
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
                story: "This is the secondary HRule.",
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
                story: "This is the tertiary HRule.",
            },
        },
    },
};
