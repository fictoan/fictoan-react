import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "./Breadcrumbs";
import { BreadcrumbItem } from "../BreadcrumbItem/BreadcrumbItem";

const meta: Meta<typeof Breadcrumbs> = {
    component: Breadcrumbs,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a Breadcrumbs wrapper.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
    render: (args) => (
        <Breadcrumbs {...args}>
            <BreadcrumbItem>Item 1</BreadcrumbItem>
            <BreadcrumbItem>Item 2</BreadcrumbItem>
            <BreadcrumbItem>Item 3</BreadcrumbItem>
        </Breadcrumbs>
    ),
};
