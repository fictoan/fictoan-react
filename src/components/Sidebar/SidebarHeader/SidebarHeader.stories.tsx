import { Meta, StoryObj } from "@storybook/react";
import { SidebarHeader } from "./SidebarHeader";

const meta: Meta<typeof SidebarHeader> = {
    component: SidebarHeader,
    tags: ["autodocs"],
    args: {
        children: "This is a Sidebar header.",
    },
    parameters: {
        docs: {
            description: {
                component: "This is a Sidebar header.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SidebarHeader>;

export const Default: Story = {};
