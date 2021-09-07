import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InfoPanel } from "./InfoPanel";
import { CommonArgTypes } from "../../utils/storyUtils";

export default {
    title: "Components/InfoPanel",
    component: InfoPanel,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof InfoPanel>;

const Template: ComponentStory<typeof InfoPanel> = (args) => <InfoPanel {...args} />;


export const Default: ComponentStory<typeof InfoPanel> = Template.bind({});
Default.args = {
    
};
