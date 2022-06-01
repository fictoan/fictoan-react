import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { InputField } from "./InputField";

const Template: FictoanStory<typeof InputField> = (args) => <InputField {...args} />;
Template.displayName = InputField.displayName;

export const Text: FictoanStory<typeof InputField> = createStoryFromTemplate(Template);
Text.args = {
    type: "text",
    label: "First Name",
    placeholder: "Enter your name",
    helpText: "This field can only contain a string",
    errorText: "Looks invalid, re-check?",
};

export const Number: FictoanStory<typeof InputField> = createStoryFromTemplate(Template);
Number.args = {
    type: "number",
    label: "Age",
    placeholder: "Enter your age",
    helpText: "This field can only contain a number",
    errorText: "Looks invalid, re-check?",
};

export const Email: FictoanStory<typeof InputField> = createStoryFromTemplate(Template);
Email.args = {
    type: "email",
    label: "Email",
    placeholder: "Enter your email address",
    helpText: "This field can only contain an email",
    errorText: "Looks invalid, re-check?",
};

export const Password: FictoanStory<typeof InputField> = createStoryFromTemplate(Template);
Password.args = {
    type: "password",
    label: "Password",
    helpText: "This field will obfuscate your input",
    errorText: "Looks invalid, re-check?",
};
