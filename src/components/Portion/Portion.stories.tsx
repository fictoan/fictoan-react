import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Portion } from "./Portion";
import { CommonArgTypes } from "../../utils/storyUtils";

export default {
    title: "Components/Portion",
    component: Portion,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof Portion>;

const Template: ComponentStory<typeof Portion> = (args) => <Portion {...args} />;


export const Default: ComponentStory<typeof Portion> = Template.bind({});
Default.args = {
    
};
