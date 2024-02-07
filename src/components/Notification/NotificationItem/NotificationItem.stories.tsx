import { Meta, StoryObj } from "@storybook/react";
import { NotificationItem } from "./NotificationItem";

const meta: Meta<typeof NotificationItem> = {
    component: NotificationItem,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a Notification item.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Default: Story = {
    args: {
        showWhen : true,
        kind     : "info",
        children : "This is a notification",
    },
};
