import React, { useState } from "react";

import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../Button/Button";
import { Portion } from "../../Portion/Portion";
import { Row } from "../../Row/Row";
import { PinInputField } from "./PinInputField";

const meta: Meta<typeof PinInputField> = {
    component: PinInputField,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a PinInputField.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof PinInputField>;

export const Default: Story = {
    args: {
        numberOfFields : 4,
        type           : "number",
        isOTP          : true,
    },
    render: (args) => {
        const [buttonEnabled, setButtonEnabled] = useState<boolean>(false);

        const handleInputChange = (text: string) => {
            if (text.length === args.numberOfFields) {
                setButtonEnabled(true);
            } else {
                setButtonEnabled(false);
            }
        };

        return (
            <Row layout="flexbox">
                <Portion>
                    <PinInputField {...args} onChange={handleInputChange} />
                </Portion>
                <Portion>
                    <Button kind="primary" isFullWidth disabled={!buttonEnabled}>Submit</Button>
                </Portion>
            </Row>
        );
    },
};
