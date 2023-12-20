import { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
    component: ProgressBar,
    tags: ["autodocs"],
    args: {
        label: "Loading...",
        value: 0.6,
        shape: "rounded",
    },
    parameters: {
        docs: {
            description: {
                component: "This is a progress bar.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
    args: {
        label: "Loading...",
        value: 0.6,
        shape: "rounded",
    },
};

export const WithoutValue: Story = {
    args: {
        label: "Loading...",
        height: "24px"
    },
};
