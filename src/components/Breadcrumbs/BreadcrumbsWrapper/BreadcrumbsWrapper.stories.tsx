import React from "react";
import { FictoanStory } from "../../../utils/storyUtils";
import { BreadcrumbsWrapper } from "./BreadcrumbsWrapper";
import { Default as BreadcrumbItem } from "../BreadcrumbItem/BreadcrumbItem.stories";
import { Primary as Button } from "../../Button/Button.stories";

export const Default: FictoanStory<typeof BreadcrumbsWrapper> = (args) => (
    <BreadcrumbsWrapper {...args}>
        <BreadcrumbItem {...BreadcrumbItem.args}>Item 1</BreadcrumbItem>
        <BreadcrumbItem {...BreadcrumbItem.args}>Item 2</BreadcrumbItem>
        <BreadcrumbItem {...BreadcrumbItem.args}>Item 3</BreadcrumbItem>
        <Button {...Button.args}>Hehe</Button>
    </BreadcrumbsWrapper>
);
BreadcrumbsWrapper.displayName = "BreadcrumbsWrapper";
