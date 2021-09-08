import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { CodeBlock } from "./CodeBlock";

const Template: FictoanStory<typeof CodeBlock> = (args) => <CodeBlock {...args} />;
Template.displayName = CodeBlock.displayName;

export const Default: FictoanStory<typeof CodeBlock> = createStoryFromTemplate(Template);
Default.args = {
    source: `const add = (a, b) => {
    return a + b;
}`,
    language: "javascript"
};
