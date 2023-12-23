import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { BreadcrumbsWrapper } from "./BreadcrumbsWrapper";
import { BreadcrumbItem } from "../BreadcrumbItem/BreadcrumbItem";

const meta: Meta<typeof BreadcrumbsWrapper> = {
    component: BreadcrumbsWrapper,
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
type Story = StoryObj<typeof BreadcrumbsWrapper>;

export const Default: Story = {
    render: (args) => (
        <BreadcrumbsWrapper {...args}>
            <BreadcrumbItem>Item 1</BreadcrumbItem>
            <BreadcrumbItem>Item 2</BreadcrumbItem>
            <BreadcrumbItem>Item 3</BreadcrumbItem>
        </BreadcrumbsWrapper>
    ),
};
