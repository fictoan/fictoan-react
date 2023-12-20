import { Meta, StoryObj } from "@storybook/react";
import { ExpandableContent } from "./ExpandableContent";

const meta: Meta<typeof ExpandableContent> = {
    component: ExpandableContent,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is an ExpandableContent.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof ExpandableContent>;

export const Default: Story = {
    args: {
        summary: "Some summary text",
        children: ["Inner details"],
    },
};
