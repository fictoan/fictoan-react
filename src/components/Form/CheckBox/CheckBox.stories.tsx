import { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from "./CheckBox";

const meta: Meta<typeof CheckBox> = {
    component: CheckBox,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a CheckBox.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
    args: {
        label: "Accept terms & conditions",
        id: "accept-checkbox",
        name: "accept-terms",
        required: true,
        helpText: "Hope you read them as well",
    },
};
