import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "./Tooltip";
import { Button } from "../Button/Button";

const meta: Meta<typeof Tooltip> = {
    component: Tooltip,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a Tooltip.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    args: {
        label: "Testing this really really long description",
        position: "right",
        bgColor: "grey",
        textColor: "white",
        borderColor: "transparent",
        shape: "rounded",
        shadow: "mild",
        children: <Button kind="primary">Test</Button>,
    },
};
