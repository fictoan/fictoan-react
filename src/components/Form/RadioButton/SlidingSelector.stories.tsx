import {Meta, StoryObj} from "@storybook/react";
import { SlidingSelector } from "./SlidingSelector";

const meta: Meta<typeof SlidingSelector> = {
    component: SlidingSelector,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a SlidingSelector.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SlidingSelector>;

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
                label: "Hjhsdfkjsdfkskfsd",
                value: "5",
                id: "option5",
            },
            {
                label: "6",
                value: "6",
                id: "option6",
            },
            {
                label: "10",
                value: "10",
                id: "option10",
            },
            {
                label: "11",
                value: "11",
                id: "option11",
            },
            {
                label: "12",
                value: "12",
                id: "option12",
            },
            {
                label: "13",
                value: "13",
                id: "option13",
            },
            {
                label: "14",
                value: "14",
                id: "option14",
            },
            {
                label: "15",
                value: "15",
                id: "option15",
            },
            {
                label: "16",
                value: "16",
                id: "option16",
            },
            {
                label: "17",
                value: "17",
                id: "option17",
            },
            {
                label: "18",
                value: "18",
                id: "option18",
            },
            {
                label: "19",
                value: "19",
                id: "option19",
            },
            {
                label: "20",
                value: "20",
                id: "option20",
            },
            {
                label: "21",
                value: "21",
                id: "option21",
            },
            {
                label: "22",
                value: "22",
                id: "option22",
            },
        ],
        helpText: "Select an option",
    },
};
