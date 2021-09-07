import React from "react";
import { ComponentStory } from "@storybook/react";

import { CodeBlock } from "./CodeBlock";

const Template: ComponentStory<typeof CodeBlock> = (args) => <CodeBlock {...args} />;


export const Default: ComponentStory<typeof CodeBlock> = Template.bind({});
Default.args = {
    source: `const add = (a, b) => {
    return a + b;
}`,
    language: "javascript"
};
