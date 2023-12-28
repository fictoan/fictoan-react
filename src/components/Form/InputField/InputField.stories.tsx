import { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
    component: InputField,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a InputField.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Text: Story = {
    args: {
        type: "text",
        label: "First Name",
        placeholder: "Enter your name",
        helpText: "This field can only contain a string",
        errorText: "Looks invalid, re-check?",
    },
};

export const Number: Story = {
    args: {
        type: "number",
        label: "Age",
        placeholder: "Enter your age",
        helpText: "This field can only contain a number",
        errorText: "Looks invalid, re-check?",
    },
};

export const Email: Story = {
    args: {
        type: "email",
        label: "Email",
        placeholder: "Enter your email address",
        helpText: "This field can only contain an email",
        errorText: "Looks invalid, re-check?",
    },
};

export const Password: Story = {
    args: {
        type: "password",
        label: "Password",
        helpText: "This field will obfuscate your input",
        errorText: "Looks invalid, re-check?",
    },
};
