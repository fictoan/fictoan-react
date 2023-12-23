import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
    component: Tabs,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a Tabs.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    args: {
        tabs: Array.from({ length: 3 }).map((_, i) => ({
            key: `Tab ${i + 1}`,
            label: `Tab ${i + 1}`,
            content: `This is content for Tab ${i + 1}`,
        })),
    },
};
