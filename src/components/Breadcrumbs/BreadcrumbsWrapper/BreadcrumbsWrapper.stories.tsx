import React from "react";
import { ComponentStory } from "@storybook/react";

import { BreadcrumbsWrapper } from "./BreadcrumbsWrapper";
import { Default as BreadcrumbItem } from "../BreadcrumbItem/BreadcrumbItem.stories";

export const Default: ComponentStory<typeof BreadcrumbsWrapper> = (args) => (
    <BreadcrumbsWrapper {...args}>
        <BreadcrumbItem {...BreadcrumbItem.args}>Item 1</BreadcrumbItem>
        <BreadcrumbItem {...BreadcrumbItem.args}>Item 2</BreadcrumbItem>
        <BreadcrumbItem {...BreadcrumbItem.args}>Item 3</BreadcrumbItem>
    </BreadcrumbsWrapper>
);
BreadcrumbsWrapper.displayName = "BreadcrumbsWrapper";
