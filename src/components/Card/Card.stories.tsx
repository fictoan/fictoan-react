import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "./Card";
import { CommonArgTypes } from "../../utils/storyUtils";

export default {
    title: "Components/Card",
    component: Card,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;


export const Default: ComponentStory<typeof Card> = Template.bind({});
Default.args = {
    
};
