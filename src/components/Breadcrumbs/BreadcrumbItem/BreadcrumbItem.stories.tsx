import React from "react";
import { ComponentStory } from "@storybook/react";

import { BreadcrumbItem } from "./BreadcrumbItem";
import { CommonArgTypes } from "../../../utils/storyUtils";

const Template: ComponentStory<typeof BreadcrumbItem> = (args) => <BreadcrumbItem {...args} />;

export const Default = Template.bind({});
Default.displayName = "BreadcrumbItem";
Default.args = {
    children: "Breadcrumb Item"
};
