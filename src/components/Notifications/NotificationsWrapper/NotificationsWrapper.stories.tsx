import React from "react";
import { ComponentStory } from "@storybook/react";
import { NotificationsWrapper } from "./NotificationsWrapper";

const Template: ComponentStory<typeof NotificationsWrapper> = (args) => <NotificationsWrapper {...args} />;


export const Default: ComponentStory<typeof NotificationsWrapper> = Template.bind({});
Default.args = {
    
};
