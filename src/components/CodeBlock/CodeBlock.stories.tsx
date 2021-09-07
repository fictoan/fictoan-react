import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CodeBlock } from "./CodeBlock";
import { CommonArgTypes } from "../../utils/storyUtils";

export default {
    title: "Components/CodeBlock",
    component: CodeBlock,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof CodeBlock>;

const Template: ComponentStory<typeof CodeBlock> = (args) => <CodeBlock {...args} />;


export const Default: ComponentStory<typeof CodeBlock> = Template.bind({});
Default.args = {
    
};
