import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { NotificationsWrapper } from "./NotificationsWrapper";
import { NotificationItem } from "../NotificationItem/NotificationItem";

const meta: Meta<typeof NotificationsWrapper> = {
    component: NotificationsWrapper,
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
type Story = StoryObj<typeof NotificationsWrapper>;

export const Default: Story = {
    render: (args) => (
        <NotificationsWrapper {...args}>
            <NotificationItem kind="info" showWhen closeWhen={() => null}>
                This is a notification!
            </NotificationItem>
            <NotificationItem kind="error" showWhen closeWhen={() => null}>
                This is another notification!
            </NotificationItem>
        </NotificationsWrapper>
    ),
};
