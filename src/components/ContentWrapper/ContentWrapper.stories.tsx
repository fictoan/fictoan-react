import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { ContentWrapper } from "./ContentWrapper";
import { Default as Card } from "../Card/Card.stories";
import { Default as Text } from "../Typography/Text.stories";

export const Default: FictoanStory<typeof ContentWrapper> = (args) => (
    <ContentWrapper {...args}>
        <Card {...Card.args}></Card>
        <Text>
            This is a paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ut tempore praesentium
            nesciunt nobis optio error amet nulla! Doloremque, vitae?
        </Text>
    </ContentWrapper>
);
Default.displayName = ContentWrapper.displayName;
