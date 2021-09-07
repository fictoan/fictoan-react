import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BreadcrumbsWrapper } from "./BreadcrumbsWrapper";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/BreadcrumbsWrapper",
    component: BreadcrumbsWrapper,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof BreadcrumbsWrapper>;

const Template: ComponentStory<typeof BreadcrumbsWrapper> = (args) => <BreadcrumbsWrapper {...args} />;


export const Default: ComponentStory<typeof BreadcrumbsWrapper> = Template.bind({});
Default.args = {
    
};
