import { Meta, StoryObj } from "@storybook/react";
import { Range } from "./Range";

const meta: Meta<typeof Range> = {
    component: Range,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a Range.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Range>;

export const Default: Story = {
    args: {
        label: "Volume",
        id: "volume-range",
        name: "volume",
        required: true,
        suffix: "%",
        min: 0,
        max: 100,
        step: 10,
    },
};
