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
        <Breadcrumbs>
            <BreadcrumbItem>
                <a href="/">
                    Home
                </a>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <a href="/category">
                    Category
                </a>
            </BreadcrumbItem>
            <BreadcrumbItem current>
                    <span>
                        Current Page
                    </span>
            </BreadcrumbItem>
        </Breadcrumbs>
    ),
};
