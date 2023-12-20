import {Meta, StoryObj} from "@storybook/react";
import { InputLabel } from "./InputLabel";

const meta: Meta<typeof InputLabel> = {
    component: InputLabel,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a InputLabel.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof InputLabel>;

export const Default: Story = {
    args: {
        label: "Label for a field",
    },
};
