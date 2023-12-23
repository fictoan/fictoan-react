import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SidebarItemIcon } from "./SidebarItemIcon";

const meta: Meta<typeof SidebarItemIcon> = {
    component: SidebarItemIcon,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a Sidebar item icon.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SidebarItemIcon>;

export const Default: Story = {
    render: (args) => <SidebarItemIcon {...args} />,
};
