import { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
    component: Heading,
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
type Story = StoryObj<typeof Heading>;

export const H1: Story = {
    args: {
        as: "h1",
        children: "This is an H1.",
    }
};

export const H2: Story = {
    args: {
        as: "h2",
        children: "This is an H2.",
    }
};

export const H3: Story = {
    args: {
        as: "h3",
        children: "This is an H3.",
    }
};

export const H4: Story = {
    args: {
        as: "h4",
        children: "This is an H4.",
    }
};

export const H5: Story = {
    args: {
        as: "h5",
        children: "This is an H5.",
    }
};

export const H6: Story = {
    args: {
        as: "h6",
        children: "This is an H6.",
    }
};
