import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a Checkbox.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        label: "Accept terms & conditions",
        id: "accept-checkbox",
        name: "accept-terms",
        required: true,
        helpText: "Hope you read them as well",
    },
};
