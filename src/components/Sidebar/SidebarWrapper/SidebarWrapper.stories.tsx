
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SidebarWrapper } from "./SidebarWrapper";
import { SidebarFooter } from "../SidebarFooter/SidebarFooter";
import { SidebarHeader } from "../SidebarHeader/SidebarHeader";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { SidebarItemIcon } from "../SidebarItemIcon/SidebarItemIcon";
import { SidebarItemText } from "../SidebarItemText/SidebarItemText";
import { Accordion } from "@/components/Accordion/Accordion";

const meta: Meta<typeof SidebarWrapper> = {
    component: SidebarWrapper,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a Sidebar wrapper.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SidebarWrapper>;

export const Default: Story = {
    render: (args) => (
        <SidebarWrapper {...args}>
            <SidebarHeader>Sidebar Header</SidebarHeader>

            <SidebarItem hasAlert>
                <SidebarItemIcon></SidebarItemIcon>
                <SidebarItemText linkText="Item 1"></SidebarItemText>
            </SidebarItem>
            <SidebarItem>
                <SidebarItemIcon></SidebarItemIcon>
                <SidebarItemText linkText="Item 2"></SidebarItemText>
            </SidebarItem>
            <SidebarItem>
                <SidebarItemIcon></SidebarItemIcon>
                <SidebarItemText linkText="Item 3"></SidebarItemText>
            </SidebarItem>

            <Accordion
                summary={
                    <SidebarItem>
                        <SidebarItemIcon></SidebarItemIcon>
                        <SidebarItemText linkText="Item Summary" weight="600"></SidebarItemText>
                    </SidebarItem>
                }
            >
                <SidebarItem>
                    <SidebarItemIcon></SidebarItemIcon>
                    <SidebarItemText linkText="Nested Item 1"></SidebarItemText>
                </SidebarItem>
                <SidebarItem>
                    <SidebarItemIcon></SidebarItemIcon>
                    <SidebarItemText linkText="Nested Item 2"></SidebarItemText>
                </SidebarItem>
            </Accordion>

            <SidebarFooter padding="micro">Sidebar footer</SidebarFooter>
        </SidebarWrapper>
    ),
};
