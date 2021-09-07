import React from "react";
import { ComponentStory } from "@storybook/react";
import { FileUpload } from "./FileUpload";

const Template: ComponentStory<typeof FileUpload> = (args) => <FileUpload {...args} />;


export const Default: ComponentStory<typeof FileUpload> = Template.bind({});
Default.args = {
    
};
