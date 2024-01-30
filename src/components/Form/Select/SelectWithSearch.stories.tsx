import { Meta, StoryObj } from "@storybook/react";
import { SelectWithSearch } from "./SelectWithSearch";

const meta: Meta<typeof SelectWithSearch> = {
    component  : SelectWithSearch,
    tags       : [ "autodocs" ],
    parameters : {
        docs : {
            description : {
                component : "This is a SelectWithSearch.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SelectWithSearch>;

export const Default: Story = {
    args : {
        label : "Hi",
        // id: "select",
        // name: "select-demo",
        options : [
            {
                label     : "Hello",
                searchKey : "Hello",
                value     : "hello",
            },
            {
                label     : "Option A",
                searchKey : "Option A",
                value     : "option-A",
            },
            {
                label     : "Option B",
                searchKey : "Option B",
                value     : "Option B",
            },
        ],
        // required: true,
        // helpText: "Select an option from the list",
    },
};
