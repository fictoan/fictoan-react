import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
    component: Badge,
    tags: ["autodocs"],
    args: {
        children: "Badge",
    },
    parameters: {
        docs: {
            description: {
                component: "This is a Badge component.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Custom: Story = {
    args: {
        bgColour: "green-light-80",
        textColour: "green",
        shape: "curved",
    },
    parameters: {
        docs: {
            description: {
                story: "This is the custom badge.",
            },
        },
    },
};
