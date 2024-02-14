import { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is an OptionCard.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
    args: {
        summary: "Some summary text",
        children: ["Inner details"],
    },
};
