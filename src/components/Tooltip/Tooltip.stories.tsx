import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Tooltip, TooltipProps } from "./Tooltip";
import { Button } from "../Button/Button";

const meta: Meta<typeof Tooltip> = {
    component  : Tooltip,
    tags       : [ "autodocs" ],
    argTypes   : {
        position : {
            control : { type : "select", options : [ "top", "bottom", "left", "right" ] },
        },
        label    : {
            control : "text",
        },
    },
    parameters : {
        docs : {
            description : {
                component : "Tooltip component that shows text on hover.",
            },
        },
    },
};

export default meta;
export const Default: StoryObj = {
    args   : {
        label    : "Testing this really really long description",
        labelFor : "storybook-button",
        position : "right",
    },
    render : (args: TooltipProps) => (
        <div>
            <Button id="storybook-button">Hover Over Me</Button>
            <Tooltip {...args} />
        </div>
    ),
};
