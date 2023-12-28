import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FormItemGroup } from "./FormItemGroup";
import { InputField } from "../InputField/InputField";
import { FormItem } from "../FormItem/FormItem";

const meta: Meta<typeof FormItemGroup> = {
    component: FormItemGroup,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a FormItemGroup.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof FormItemGroup>;

export const Default: Story = {
    args: {
        isJoint: true,
    },
    render: (args) => (
        <FormItemGroup {...args}>
            <FormItem>
                <InputField
                    type="text"
                    label="First Name"
                    placeholder="Enter your name"
                    helpText="This field can only contain a string"
                    errorText="Looks invalid, re-check?"
                ></InputField>
            </FormItem>
            <FormItem>
                <InputField
                    type="number"
                    label="Age"
                    placeholder="Enter your age"
                    helpText="This field can only contain a number"
                    errorText="Looks invalid, re-check?"
                ></InputField>
            </FormItem>
            <FormItem>
                <InputField
                    type="email"
                    label="Email"
                    placeholder="Enter your email address"
                    helpText="This field can only contain an email"
                    errorText="Looks invalid re-check?"
                ></InputField>
            </FormItem>
        </FormItemGroup>
    ),
};
