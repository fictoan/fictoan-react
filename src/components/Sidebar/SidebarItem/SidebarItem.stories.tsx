import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { SidebarItem } from "./SidebarItem";
import { SidebarItemIcon } from "../SidebarItemIcon/SidebarItemIcon";
import { SidebarItemText } from "../SidebarItemText/SidebarItemText";

const meta: Meta<typeof SidebarItem> = {
    component: SidebarItem,
    tags: ["autodocs"],
    args: {
        children: "This is a Sidebar item.",
    },
    render: (args) => (
        <SidebarItem {...args}>
            <SidebarItemIcon />
            <SidebarItemText linkText="Sidebar text!"></SidebarItemText>
        </SidebarItem>
    ),
    parameters: {
        docs: {
            description: {
                component: "This is a Sidebar item.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SidebarItem>;

export const Default: Story = {};
