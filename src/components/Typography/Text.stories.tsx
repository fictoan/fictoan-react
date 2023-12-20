import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
    component: Text,
    tags: ["autodocs"],
    args: {
        children:
            "This is some text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda cupiditate eos illum.",
    },
    parameters: {
        docs: {
            description: {
                component: "This is the Text component.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const Small: Story = {
    args: {
        size: "small",
    },
};

export const huge: Story = {
    args: {
        size: "huge",
    },
};
