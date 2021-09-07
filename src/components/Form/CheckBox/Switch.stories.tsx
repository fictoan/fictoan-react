import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Switch } from "./Switch";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/Switch",
    component: Switch,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;


export const Default: ComponentStory<typeof Switch> = Template.bind({});
Default.args = {
    
};
