import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Row } from "./Row";
import { CommonArgTypes } from "../../utils/storyUtils";

export default {
    title: "Components/Row",
    component: Row,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof Row>;

const Template: ComponentStory<typeof Row> = (args) => <Row {...args} />;


export const Default: ComponentStory<typeof Row> = Template.bind({});
Default.args = {
    
};
