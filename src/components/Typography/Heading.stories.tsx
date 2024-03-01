import { Meta, StoryObj } from "@storybook/react";
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from "./Heading";

const meta: Meta<typeof Heading1> = {
    component: Heading1,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a Heading.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Heading1>;

export const H1: Story = {
    args: {
        children: "This is an H1.",
    }
};

export const H2: Story = {
    args: {
        children: "This is an H2.",
    }
};

export const H3: Story = {
    args: {
        children: "This is an H3.",
    }
};

export const H4: Story = {
    args: {
        children: "This is an H4.",
    }
};

export const H5: Story = {
    args: {
        children: "This is an H5.",
    }
};

export const H6: Story = {
    args: {
        children: "This is an H6.",
    }
};
