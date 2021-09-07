import React from "react";
import { ComponentStory } from "@storybook/react";
import { TextArea } from "./TextArea";

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;


export const Default: ComponentStory<typeof TextArea> = Template.bind({});
Default.args = {
    
};
