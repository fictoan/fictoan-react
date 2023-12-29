import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
    component: RadioButton,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a RadioButton.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
    args: {
        label: "Option",
        id: "radio-button",
        name: "radio-button-demo",
    },
};
