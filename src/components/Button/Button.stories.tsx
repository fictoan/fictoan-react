import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    component: Button,
    tags: ["autodocs"],
    args: {
        children: "Button",
    },
    parameters: {
        docs: {
            description: {
                component: "This is a button, plain and simple.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        kind: "primary",
    },
    parameters: {
        docs: {
            description: {
                story: "This is the primary button. Use this for default call-to-action buttons.",
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
                story: "This is the secondary button. Use this for secondary actions.",
            },
        },
    },
};

export const Tertiary: Story = {
    args: {
        kind: "tertiary",
        children: "Button",
    },
    parameters: {
        docs: {
            description: {
                story: "This is the tertiary button. Use this for tertiary actions.",
            },
        },
    },
};

export const Custom: Story = {
    args: {
        kind: "custom",
        bgColor: "cyan",
        textColor: "black",
        shadow: "soft",
        shape: "rounded",
    },
    parameters: {
        docs: {
            description: {
                story: "This is the custom button. Customize it the way you want.",
            },
        },
    },
};
