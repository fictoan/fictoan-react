import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BreadcrumbItem } from "./BreadcrumbItem";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/BreadcrumbItem",
    component: BreadcrumbItem,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof BreadcrumbItem>;

const Template: ComponentStory<typeof BreadcrumbItem> = (args) => <BreadcrumbItem {...args} />;


export const Default: ComponentStory<typeof BreadcrumbItem> = Template.bind({});
Default.args = {
    
};
