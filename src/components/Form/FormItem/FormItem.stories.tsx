import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FormItem } from "./FormItem";
import { InputField } from "../InputField/InputField";

const meta: Meta<typeof FormItem> = {
    component: FormItem,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a FormItem.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof FormItem>;

export const Default: Story = {
    args: {
        children: (
            <InputField
                type="number"
                label="Age"
                placeholder="Enter your age"
                helpText="This field can only contain a number"
                errorText="Looks invalid, re-check?"
            ></InputField>
        ),
    },
};
