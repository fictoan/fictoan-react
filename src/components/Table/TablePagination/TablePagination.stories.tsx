import React from "react";
import { ComponentStory } from "@storybook/react";
import { TablePagination } from "./TablePagination";

const Template: ComponentStory<typeof TablePagination> = (args) => <TablePagination {...args} />;


export const Default: ComponentStory<typeof TablePagination> = Template.bind({});
Default.args = {
    
};
