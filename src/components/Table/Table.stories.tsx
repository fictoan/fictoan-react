import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Table } from "./Table";
import { CommonArgTypes } from "../../utils/storyUtils";

export default {
    title: "Components/Table",
    component: Table,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;


export const Default: ComponentStory<typeof Table> = Template.bind({});
Default.args = {
    
};
