import React from "react";
import { ComponentStory } from "@storybook/react";
import { Row } from "./Row";
import { CommonArgTypes } from "../../utils/storyUtils";

const Template: ComponentStory<typeof Row> = (args) => <Row {...args} />;


export const Default: ComponentStory<typeof Row> = Template.bind({});
Default.args = {
    
};
