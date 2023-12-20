import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { ToastItem } from "../ToastItem/ToastItem";
import { ToastsWrapper } from "./ToastsWrapper";
import { Default as ToastItemStory } from "../ToastItem/ToastItem.stories";

const meta: Meta<typeof ToastsWrapper> = {
    component: ToastsWrapper,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a Toasts wrapper.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof ToastsWrapper>;

export const Default: Story = {
    args: {
        children: [<ToastItem {...ToastItemStory.args} />],
    },
};
