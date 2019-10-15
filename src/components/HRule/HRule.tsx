import React, { HTMLProps } from "react";

import { BaseComponent } from "../BaseComponent/BaseComponent";

const HRule = (props: HTMLProps<HTMLHRElement>) => (
    <BaseComponent<HTMLHRElement>
        Element="hr"
        {...props}
    />
);

export default HRule;
