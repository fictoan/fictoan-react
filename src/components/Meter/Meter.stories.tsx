import { Meta, StoryObj } from "@storybook/react";
import { Meter } from "./Meter";

const meta: Meta<typeof Meter> = {
    component: Meter,
    tags: ["autodocs"],
    args: {
        label : "Total",
        value: 5,
        shape: "rounded",
        min: 0,
        max: 10,
        low: 3,
        high: 7,
        optimum: 5,
        height: "1.5rem",
    },
    parameters: {
        docs: {
            description: {
                component: "This is a meter.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Meter>;

export const Default: Story = {
    args: {
        label : "Total",
        value: 5,
        shape: "rounded",
        min: 0,
        max: 10,
        low: 3,
        high: 7,
        optimum: 5,
        height: "1.5rem",
    },
};
