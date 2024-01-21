import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Form } from "./Form";
import { InputField } from "../InputField/InputField";
import { FormItemGroup } from "../FormItemGroup/FormItemGroup";
import { FormItem } from "../FormItem/FormItem";
import { RadioGroup } from "../RadioButton/RadioGroup";
import { Checkbox } from "../Checkbox/Checkbox";
import { Switch } from "../Checkbox/Switch";
import { Select } from "../Select/Select";
import { TextArea } from "../TextArea/TextArea";
import { Button } from "../../Button/Button";

const meta: Meta<typeof Form> = {
    component: Form,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a Form.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
    args: {
        errorText: "Something went wrong. Please try again.",
        children: [
            <FormItemGroup>
                <FormItem>
                    <InputField
                        type="text"
                        label="First Name"
                        placeholder="Enter your name"
                        helpText="This field can only contain a string"
                        errorText="Looks invalid, re-check?"
                        required
                    ></InputField>
                </FormItem>
                <FormItem>
                    <InputField
                        type="number"
                        label="Age"
                        placeholder="Enter your age"
                        helpText="This field can only contain a number"
                        errorText="Looks invalid, re-check?"
                        required
                    ></InputField>
                </FormItem>
            </FormItemGroup>,
            <FormItem>
                <InputField
                    type="email"
                    label="Email"
                    placeholder="Enter your email address"
                    helpText="This field can only contain an email"
                    errorText="Looks invalid re-check?"
                    required
                ></InputField>
            </FormItem>,
            <FormItem>
                <InputField
                    type="password"
                    label="Password"
                    helpText="This field will obfuscate your input"
                    errorText="Looks invalid re-check?"
                    required
                ></InputField>
            </FormItem>,
            <FormItem>
                <TextArea
                    label="Paragraph"
                    rows={5}
                    placeholder="Enter long text here"
                    helpText="This field can only contain a string"
                ></TextArea>
            </FormItem>,
            <FormItem>
                <Select
                    label="Options"
                    id="select"
                    name="select-demo"
                    options={[
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
                    ]}
                    required
                    helpText="Select an option from the list"
                ></Select>
            </FormItem>,
            <FormItem>
                <RadioGroup
                    label="Options"
                    id="radio-buttons"
                    name="radio-input-group-demo"
                    options={[
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
                    ]}
                    helpText="Select an option"
                    required
                ></RadioGroup>
            </FormItem>,
            <FormItem>
                <Checkbox
                    label="Accept terms & conditions"
                    id="accept-checkbox"
                    name="accept-terms"
                    required
                    helpText="Hope you read them as well"
                ></Checkbox>
            </FormItem>,
            <FormItem>
                <Switch label="Turn On" id="turn-on-switch"></Switch>
            </FormItem>,
            <FormItem>
                <Button kind="primary" type="button">
                    Submit
                </Button>
            </FormItem>,
        ],
    },
};

export const UsingFieldsProp: Story = {
    args: {
        fields: [
            {
                // @ts-ignore
                as: "Checkbox",
                id: "accept",
                name: "accept",
                label: "Accept",
                defaultChecked: false,
                validateThis: false,
                required: false,
                desktopSpan: "3",
            },
            {
                // @ts-ignore
                as: "Switch",
                id: "customer-parameterIsOptional",
                name: "optional",
                label: "Optional",
                errorText: "",
                helpText: "",
                defaultChecked: false,
                validateThis: false,
                required: false,
                desktopSpan: "3",
            },
            {
                // @ts-ignore
                as: "InputField",
                id: "customer-parameterName",
                name: "paramName",
                label: "Parameter name",
                errorText: "Looks invalid, recheck?",
                helpText: "Identification parameter your customer. Eg: Loan number, Account number etc.",
                defaultValue: "",
                validateThis: false,
                required: true,
                desktopSpan: "24",
            },
            {
                // @ts-ignore
                as: "InputField",
                id: "email",
                name: "email",
                label: "Email",
                type: "email",
                defaultValue: "",
                validateThis: false,
                required: true,
                desktopSpan: "12",
            },
            {
                // @ts-ignore
                as: "InputField",
                id: "password",
                name: "password",
                label: "Password",
                type: "password",
                defaultValue: "",
                validateThis: false,
                required: true,
                desktopSpan: "12",
            },
            {
                // @ts-ignore
                as: "InputField",
                id: "name",
                name: "name",
                label: "Name",
                defaultValue: "",
                validateThis: false,
                required: false,
                desktopSpan: "12",
            },
            {
                // @ts-ignore
                as: "InputField",
                id: "age",
                name: "age",
                label: "Age",
                type: "number",
                defaultValue: "",
                validateThis: false,
                required: false,
                desktopSpan: "12",
            },
            {
                // @ts-ignore
                as: "TextArea",
                id: "description",
                name: "description",
                label: "Description",
                rows: 6,
                defaultValue: "",
                validateThis: false,
                required: true,
                desktopSpan: "16",
            },
            {
                // @ts-ignore
                as: "Select",
                id: "selection",
                name: "selection",
                label: "Selection",
                options: [
                    {
                        id: "haha",
                        label: "haha",
                        value: "haha",
                    },
                    {
                        id: "lol",
                        label: "lol",
                        value: "lol",
                    },
                ],
                defaultValue: "",
                validateThis: false,
                required: false,
            },
            {
                // @ts-ignore
                as: "RadioGroup",
                id: "selection-radio",
                name: "selection-radio",
                label: "Selection-radio",
                options: [
                    {
                        id: "haha2",
                        label: "haha",
                        value: "haha",
                        defaultChecked: true,
                    },
                    {
                        id: "lol2",
                        label: "lol",
                        value: "lol",
                    },
                ],
                validateThis: false,
                required: false,
            },
        ],
        children: [
            <FormItem>
                <Button type="button">Submit</Button>
            </FormItem>,
        ],
    },
};
