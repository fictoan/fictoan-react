import React, { useState } from "react";

import { createStoryFromTemplate, FictoanStory } from "../../utils/storyUtils";
import { Button } from "../Button/Button";
import { Portion } from "../Portion/Portion";
import { Row } from "../Row/Row";
import { PinInputField } from "./PinInputField";

const Template: FictoanStory<typeof PinInputField> = (args) => {
    const [buttonEnabled, setButtonEnabled] = useState<boolean>(false);

    const handleInputChange = (text: string) => {
        if (text.length === args.numberOfFields) {
            setButtonEnabled(true);
        } else {
            setButtonEnabled(false);
        }
    };

    return (
        <Row>
            <Portion>
                <PinInputField {...args} onChange={handleInputChange} />
            </Portion>
            <Portion>
                <Button disabled={!buttonEnabled}>Enabled</Button>
            </Portion>
        </Row>
    );
};
Template.displayName = PinInputField.displayName;

export const Default: FictoanStory<typeof PinInputField> = createStoryFromTemplate(Template);
Default.args = {
    numberOfFields: 4,
    type: "number",
    otp: true,
};
