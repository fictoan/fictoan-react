import React from "react";
import { ComponentStory } from "@storybook/react";

import { ContentWrapper } from "./ContentWrapper";
import { CommonArgTypes } from "../../utils/storyUtils";

const Template: ComponentStory<typeof ContentWrapper> = (args) => <ContentWrapper {...args} />;


export const Default: ComponentStory<typeof ContentWrapper> = Template.bind({});
Default.args = {
    
};
