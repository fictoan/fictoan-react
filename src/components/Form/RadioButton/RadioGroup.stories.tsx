import {Meta, StoryObj} from "@storybook/react";
import { RadioGroup } from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
    component: RadioGroup,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a RadioGroup.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
    args: {
        label: "Options",
        id: "radio-buttons",
        name: "radio-input-group-demo",
        options: [
            {
                label: "Option A",
                value: "Option A",
                id: "radio-option-a",
            },
            {
                label: "Option B",
                value: "Option B",
                id: "radio-option-b",
            },
        ],
        helpText: "Select an option",
    },
};
