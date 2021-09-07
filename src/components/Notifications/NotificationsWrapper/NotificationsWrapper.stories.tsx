import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NotificationsWrapper } from "./NotificationsWrapper";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/NotificationsWrapper",
    component: NotificationsWrapper,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof NotificationsWrapper>;

const Template: ComponentStory<typeof NotificationsWrapper> = (args) => <NotificationsWrapper {...args} />;


export const Default: ComponentStory<typeof NotificationsWrapper> = Template.bind({});
Default.args = {
    
};
