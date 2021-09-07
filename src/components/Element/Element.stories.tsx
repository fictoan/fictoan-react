import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Element } from "./Element";
import { CommonArgTypes } from "../../utils/storyUtils";

export default {
    title: "Components/Element",
    component: Element,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof Element>;

const Template: ComponentStory<typeof Element> = (args) => <Element {...args} />;


export const Default: ComponentStory<typeof Element> = Template.bind({});
Default.args = {
    
};
