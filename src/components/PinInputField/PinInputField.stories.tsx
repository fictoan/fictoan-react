import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { PinInputField } from "./PinInputField";

const Template: FictoanStory<typeof PinInputField> = (args) => <PinInputField {...args} />;
Template.displayName = PinInputField.displayName;

export const Default: FictoanStory<typeof PinInputField> = createStoryFromTemplate(Template);
Default.args = {
    numberOfFields: 4,
    type: "number",
    mask: true,
    otp: true,
};
