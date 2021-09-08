import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { FormItemJointGroup } from "./FormItemJointGroup";
import { Number as NumberInput, Text as TextInput, Email as EmailInput } from "../InputField/InputField.stories";
import { Default as FormItem } from "../FormItem/FormItem.stories";

export const Default: FictoanStory<typeof FormItemJointGroup> = (args) => (
    <FormItemJointGroup {...args}>
        <FormItem {...FormItem.args}>
            <TextInput {...TextInput.args}></TextInput>
        </FormItem>
        <FormItem {...FormItem.args}>
            <NumberInput {...NumberInput.args}></NumberInput>
        </FormItem>
        <FormItem {...FormItem.args}>
            <EmailInput {...EmailInput.args}></EmailInput>
        </FormItem>
    </FormItemJointGroup>
)
Default.displayName = FormItemJointGroup.displayName;
