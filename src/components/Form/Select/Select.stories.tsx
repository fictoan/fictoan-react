import {Meta, StoryObj} from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
    component: Select,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a Select.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        label: "Options",
        id: "select",
        name: "select-demo",
        options: [
            {
                label: "Option A",
                value: "Option A",
            },
            {
                label: "Option B",
                value: "Option B",
            },
            {
                label: "...",
                value: "...",
            },
        ],
        required: true,
        helpText: "Select an option from the list",
    },
};
