import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TablePagination } from "./TablePagination";
import { CommonArgTypes } from "../../../utils/storyUtils";

export default {
    title: "Components/TablePagination",
    component: TablePagination,
    argTypes: {
      ...CommonArgTypes,
    },
} as ComponentMeta<typeof TablePagination>;

const Template: ComponentStory<typeof TablePagination> = (args) => <TablePagination {...args} />;


export const Default: ComponentStory<typeof TablePagination> = Template.bind({});
Default.args = {
    
};
