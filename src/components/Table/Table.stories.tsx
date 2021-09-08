import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { Table } from "./Table";

const Template: FictoanStory<typeof Table> = (args) => <Table {...args} />;
Template.displayName = Table.displayName;

export const Default: FictoanStory<typeof Table> = createStoryFromTemplate(Template);
Default.args = {
    
};
