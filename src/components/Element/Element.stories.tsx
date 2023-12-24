import { Meta, StoryObj } from "@storybook/react";
import { Element } from "./Element";

const meta: Meta<typeof Element> = {
    component: Element,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is an Element.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Element>;

export const Default: Story = {
    args: {
        as: "div",
        borderColor: "slate-20",
        padding: "micro",
        children: "This is a div",
    },
};
