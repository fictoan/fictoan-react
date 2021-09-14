import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { FormWrapper } from "./FormWrapper";
import { Text as TextInput, Email as EmailInput, Password as PasswordInput } from "../InputField/InputField.stories";
import { Default as FormItemGroup } from "../FormItemGroup/FormItemGroup.stories";
import { Default as FormItem } from "../FormItem/FormItem.stories";
import { Default as InputLabel } from "../InputLabel/InputLabel.stories";
import { Default as RadioGroup } from "../RadioButton/RadioGroup.stories";
import { Default as CheckBox } from "../CheckBox/CheckBox.stories";
import { Primary as Button } from "../../Button/Button.stories";

const Template: FictoanStory<typeof FormWrapper> = (args) => <FormWrapper {...args} />;
Template.displayName = FormWrapper.displayName;

export const Default: FictoanStory<typeof FormWrapper> = createStoryFromTemplate(Template);
Default.args = {
    children: [
        <FormItemGroup>
            <FormItem>
                <TextInput {...TextInput.args} label="First name" required></TextInput>
            </FormItem>
            <FormItem>
                <TextInput {...TextInput.args} label="Last name" required></TextInput>
            </FormItem>
        </FormItemGroup>,
        <FormItem>
            <EmailInput {...EmailInput.args} required></EmailInput>
        </FormItem>,
        <FormItem>
            <PasswordInput {...PasswordInput.args} required></PasswordInput>
        </FormItem>,
        <FormItem>
            <RadioGroup {...RadioGroup.args} id="radio-buttons-demo" required></RadioGroup>
        </FormItem>,
        <FormItem>
            <CheckBox {...CheckBox.args} required></CheckBox>
        </FormItem>,
        <FormItem>
            <Button {...Button.args} type="button">Submit</Button>
        </FormItem>
    ]
}

export const UsingFieldsProp: FictoanStory<typeof FormWrapper> = createStoryFromTemplate(Template);
UsingFieldsProp.args = {
    onFieldsChange: (e) => console.log(e.currentTarget.name, e.currentTarget.type, e.currentTarget.value),
    fields: [
        {
            as: "CheckBox",
            id: "accept",
            name: "accept",
            label: "Accept",
            defaultChecked: false,
            validateThis: false,
            required: false,
            desktopSpan: "3"
        },
        {
            as: "Switch",
            id: "customer-parameterIsOptional",
            name: "optional",
            label: "Optional",
            errorText: "",
            helpText: "",
            defaultChecked: false,
            validateThis: false,
            required: false,
            desktopSpan: "3"
        },
        {
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
                    value: "lol"
                },
            ],
            defaultValue: "",
            validateThis: false,
            required: false,
        },
        {
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
                    value: "lol"
                },
            ],
            validateThis: false,
            required: false,
        },
    ]
}
