import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ContentWrapper } from "./ContentWrapper";
import { CommonArgTypes } from "../../utils/storyUtils";

export default {
    title: "Components/ContentWrapper",
    component: ContentWrapper,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof ContentWrapper>;

const Template: ComponentStory<typeof ContentWrapper> = (args) => <ContentWrapper {...args} />;


export const Default: ComponentStory<typeof ContentWrapper> = Template.bind({});
Default.args = {
    
};
