import { Meta, StoryObj } from "@storybook/react";
import { Callout } from "./Callout";

const meta: Meta<typeof Callout> = {
    component: Callout,
    tags: ["autodocs"],
    args: {
        children: "Hey there! This is a callout.",
    },
    parameters: {
        docs: {
            description: {
                component: "This is a Callout.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Callout>;

export const Info: Story = {
    args: {
        kind: "info",
    },
    parameters: {
        docs: {
            description: {
                story: "This is the info callout.",
            },
        },
    },
};

export const Success: Story = {
    args: {
        kind: "success",
    },
    parameters: {
        docs: {
            description: {
                story: "This is the success callout.",
            },
        },
    },
};

export const Warning: Story = {
    args: {
        kind: "warning",
    },
    parameters: {
        docs: {
            description: {
                story: "This is the warning callout.",
            },
        },
    },
};

export const Error: Story = {
    args: {
        kind: "error",
    },
    parameters: {
        docs: {
            description: {
                story: "This is the error callout.",
            },
        },
    },
};
