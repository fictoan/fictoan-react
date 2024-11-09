import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
    component: Modal,
    tags: ["autodocs"],
    args: {
        children: "Hey there! This is a modal.",
    },
    parameters: {
        docs: {
            description: {
                component: "This is a Modal.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    args: {
    }
};
