import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { FormItem } from "./FormItem";
import { Number as NumberInput } from "../InputField/InputField.stories";

export const Default: FictoanStory<typeof FormItem> = (args) => <FormItem {...args} />;
Default.args = {
    children: <NumberInput {...NumberInput.args}></NumberInput>,
};
Default.displayName = FormItem.displayName;
