import React from "react";
import { ComponentStory } from "@storybook/react";
import { NotificationItem } from "./NotificationItem";

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;


export const Default: ComponentStory<typeof NotificationItem> = Template.bind({});
Default.args = {
    
};
