import React, { HTMLProps } from "react";

import { BaseComponent } from "../../BaseComponent";

const FormUnit = (props: HTMLProps<HTMLDivElement>) => (
    <BaseComponent<HTMLDivElement>
        Element="div"
        baseClassName="ff-form-unit"
        {...props}
    />
);

export default FormUnit;
