import { Meta, StoryObj } from "@storybook/react";

import { BreadcrumbItem } from "./BreadcrumbItem";

const meta: Meta<typeof BreadcrumbItem> = {
    component: BreadcrumbItem,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a Breadcrumb item.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof BreadcrumbItem>;

export const Default: Story = {
    args: {
        children: "This is a Breadcrumb item.",
    },
};
