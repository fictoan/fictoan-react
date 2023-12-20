import { Meta, StoryObj } from "@storybook/react";
import { SidebarItemText } from "./SidebarItemText";

const meta: Meta<typeof SidebarItemText> = {
    component: SidebarItemText,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a Sidebar item text.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SidebarItemText>;

export const Default: Story = {
    args: {
        linkText: "This is a Sidebar item text.",
    },
};
