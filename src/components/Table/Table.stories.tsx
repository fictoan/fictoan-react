import React from "react";
import { ComponentStory } from "@storybook/react";
import { Table } from "./Table";

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;


export const Default: ComponentStory<typeof Table> = Template.bind({});
Default.args = {
    
};
