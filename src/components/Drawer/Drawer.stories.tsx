import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Drawer } from "./Drawer";
import { Heading } from "../Typography/Heading";

const meta: Meta<typeof Drawer> = {
    component: Drawer,
    tags: ["autodocs"],
    args: {
        openWhen : true,
    },
    render: (args) => (
        <Drawer {...args}>
            <Heading as="h1">Some heading</Heading>
        </Drawer>
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
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
    args: {
        openWhen : true,
    },
    parameters: {
        docs: {
            description: {
                story: "This is the default bottom drawer.",
            },
        },
    },
};
