import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { BreadcrumbItem } from "./BreadcrumbItem";

const Template: FictoanStory<typeof BreadcrumbItem> = (args) => <BreadcrumbItem {...args} />;
Template.displayName = BreadcrumbItem.displayName;

export const Default: FictoanStory<typeof BreadcrumbItem> = createStoryFromTemplate(Template);
Default.args = {
    children: "Breadcrumb Item"
};
