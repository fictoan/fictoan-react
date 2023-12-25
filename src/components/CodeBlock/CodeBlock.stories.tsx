import { Meta, StoryObj } from "@storybook/react";
import { CodeBlock } from "./CodeBlock";

const meta: Meta<typeof CodeBlock> = {
    component: CodeBlock,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a code block.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

export const JavaScript: Story = {
    args: {
        source: `const add = (a, b) => {
    return a + b;
}`,
        language: "javascript",
    }
};

export const CSS: Story = {
    args: {
        source: `.item-a {
    grid-column-start: 2;
    grid-column-end: five;
    grid-row-start: row1-start;
    grid-row-end: 3;
}`,
        language: "css",
    }
};

export const Python: Story = {
    args: {
        source: `from collections import defaultdict
#merge two or more dicts using the collections module
def merge_dicts(*dicts):
    mdict = defaultdict(list)
    for d in dicts:
        for key in d:
            mdict[key].append(d[key])
    return dict(mdict)`,
        language: "python",
    }
};

export const Go: Story = {
    args: {
        source: `package main
import "fmt"

func main() {
    fmt.Printf("Hello from the GO programming language\n")
    fmt.Printf("This is lot like C programming language\n")
}`,
        language: "go",
    }
};

export const CSharp: Story = {
    args: {
        source: `Dictionary<string, int> dimensions = new Dictionary<string, int>
{
    { "length", 10 },
    { "width", 20 },
    { "height", 30 }
};

int valueToFind = 20;`,
        language: "csharp",
    }
};
