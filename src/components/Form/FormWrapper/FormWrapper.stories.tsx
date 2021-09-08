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

export const Default: FictoanStory<typeof FormWrapper> = (args) => (
    <FormWrapper {...args}>
        <FormItemGroup>
            <FormItem>
                <TextInput {...TextInput.args} label="First name"></TextInput>
            </FormItem>
            <FormItem>
                <TextInput {...TextInput.args} label="Last name"></TextInput>
            </FormItem>
        </FormItemGroup>
        <FormItem>
            <EmailInput {...EmailInput.args}></EmailInput>
        </FormItem>
        <FormItem>
            <PasswordInput {...PasswordInput.args}></PasswordInput>
        </FormItem>
        <FormItem>
            <InputLabel label="Choose your option" htmlFor="radio-buttons-demo" />
            <RadioGroup {...RadioGroup.args} id="radio-buttons-demo"></RadioGroup>
        </FormItem>
        <FormItem>
            <CheckBox {...CheckBox.args}></CheckBox>
        </FormItem>
        <FormItem>
            <Button {...Button.args} type="button">Submit</Button>
        </FormItem>
    </FormWrapper>
)
Default.displayName = FormWrapper.displayName;
