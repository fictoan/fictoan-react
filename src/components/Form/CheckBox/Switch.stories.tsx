import {Meta, StoryObj} from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
    component: Switch,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a Switch.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
    args: {
        label: "Turn On",
        id: "turn-on-switch",
    },
};
