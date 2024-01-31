import {Meta, StoryObj} from "@storybook/react";
import { RadioTabGroup } from "./RadioTabGroup";

const meta: Meta<typeof RadioTabGroup> = {
    component: RadioTabGroup,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a TabbedRadioGroup.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof RadioTabGroup>;

export const Default: Story = {
    args: {
        label: "Options",
        id: "radio-buttons",
        name: "radio-input-group-demo",
        options: [
            {
                label: "Hello",
                value: "0",
                id: "option0",
            },
            {
                label: "1",
                value: "1",
                id: "option1",
            },
            {
                label: "2",
                value: "2",
                id: "option2",
            },
            {
                label: "3",
                value: "3",
                id: "option3",
            },
            {
                label: "4",
                value: "4",
                id: "option4",
            },
            {
                label: "Hjhsdfkjs",
                value: "5",
                id: "option5",
            },
            {
                label: "10",
                value: "10",
                id: "option10",
            },
        ],
        // helpText: "Select an option",
    },
};
