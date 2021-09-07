import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "./Text";
import { CommonArgTypes } from "../../utils/storyUtils";

export default {
    title: "Components/Text",
    component: Text,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;


export const Default: ComponentStory<typeof Text> = Template.bind({});
Default.args = {
    
};
