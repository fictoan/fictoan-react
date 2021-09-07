import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NotificationItem } from "./NotificationItem";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/NotificationItem",
    component: NotificationItem,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;


export const Default: ComponentStory<typeof NotificationItem> = Template.bind({});
Default.args = {
    
};
