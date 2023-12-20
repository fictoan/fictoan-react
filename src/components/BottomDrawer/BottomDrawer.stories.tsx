import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { BottomDrawer } from "./BottomDrawer";
import { Heading } from "../Typography/Heading";

const meta: Meta<typeof BottomDrawer> = {
    component: BottomDrawer,
    tags: ["autodocs"],
    args: {
        isOpen: true,
    },
    render: (args) => (
        <BottomDrawer {...args}>
            <Heading as="h1">Some heading</Heading>
        </BottomDrawer>
    ),
    parameters: {
        docs: {
            description: {
                component: "This is a bottom drawer.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof BottomDrawer>;

export const Default: Story = {
    args: {
        isOpen: true,
    },
    parameters: {
        docs: {
            description: {
                story: "This is the default bottom drawer.",
            },
        },
    },
};
