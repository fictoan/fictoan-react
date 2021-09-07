import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { CommonArgTypes } from "../../utils/storyUtils";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {
      ...CommonArgTypes,
    },
    args: {
        children: "Button"
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    kind: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
    kind: "secondary"
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    kind: "tertiary"
};

export const Custom = Template.bind({});
Custom.args = {
    kind: "custom",
    bgColour: "cyan",
    textColour: "black",
    shadow: "soft",
    shape: "rounded"
};
