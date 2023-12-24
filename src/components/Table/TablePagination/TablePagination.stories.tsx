import { Meta, StoryObj } from "@storybook/react";
import { TablePagination } from "./TablePagination";

const meta: Meta<typeof TablePagination> = {
    component: TablePagination,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a TablePagination.",
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof TablePagination>;

export const Default: Story = {
    args: {
        pageIndex: 1,
        rangeStart: 1,
        rangeEnd: 10,
        hasPreviousPage: false,
        hasNextPage: true,
        totalRecords: 100,
    },
};
