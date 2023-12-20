import { Meta, StoryObj } from "@storybook/react";
import { SidebarFooter } from "./SidebarFooter";

const meta: Meta<typeof SidebarFooter> = {
    component: SidebarFooter,
    tags: ["autodocs"],
    args: {
        children: "This is a Sidebar footer.",
    },
    parameters: {
        docs: {
            description: {
                component: "This is a Sidebar footer.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SidebarFooter>;

export const Default: Story = {};
