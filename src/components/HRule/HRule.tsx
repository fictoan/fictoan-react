import React, { HTMLProps } from "react";

import { BaseComponent } from "../BaseComponent";

const HRule = (props: HTMLProps<HTMLHRElement>) => (
    <BaseComponent<HTMLProps<HTMLHRElement>, HTMLHRElement>
        Element="hr"
        {...props}
    />
);

export default HRule;
