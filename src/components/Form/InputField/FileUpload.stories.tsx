import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { FileUpload } from "./FileUpload";

const Template: FictoanStory<typeof FileUpload> = (args) => <FileUpload {...args} />;
Template.displayName = FileUpload.displayName;

export const Default: FictoanStory<typeof FileUpload> = createStoryFromTemplate(Template);
Default.args = {
    label: "Upload file",
    id: "file-upload",
    name: "file",
};
