import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ToastItem } from "./ToastItem";

const meta: Meta<typeof ToastItem> = {
    component: ToastItem,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a Toast item.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof ToastItem>;

export const Default: Story = {
    args: {
        showWhen         : true,
        secondsToShowFor : 4000,
        children         : "This is a Toast item.",
    },
};
