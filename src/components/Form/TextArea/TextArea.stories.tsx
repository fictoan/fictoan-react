import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextArea } from "./TextArea";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/TextArea",
    component: TextArea,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;


export const Default: ComponentStory<typeof TextArea> = Template.bind({});
Default.args = {
    
};
