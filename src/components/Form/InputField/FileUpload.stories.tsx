import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import { FileUpload } from "./FileUpload";

const meta: Meta<typeof FileUpload> = {
    component: FileUpload,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a FileUpload.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
    args: {
        label: "Upload file",
        id: "file-upload",
        name: "file",
    },
};
