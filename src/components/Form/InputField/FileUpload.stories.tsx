import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FileUpload } from "./FileUpload";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/FileUpload",
    component: FileUpload,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => <FileUpload {...args} />;


export const Default: ComponentStory<typeof FileUpload> = Template.bind({});
Default.args = {
    
};
