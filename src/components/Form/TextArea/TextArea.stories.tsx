import {Meta, StoryObj} from "@storybook/react";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
    component: TextArea,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a TextArea.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
    args: {
        label: "Paragraph",
        rows: 5,
        placeholder: "Enter long text here",
        helpText: "This field can only contain a string",
    },
};
