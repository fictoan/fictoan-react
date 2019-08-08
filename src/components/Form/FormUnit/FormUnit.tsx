import React, { HTMLProps } from "react";

import { BaseComponent } from "../../BaseComponent";

const FormUnit = (props: HTMLProps<HTMLDivElement>) => (
    <BaseComponent<HTMLProps<HTMLDivElement>, HTMLDivElement>
        Element="div"
        baseClassName="ff-form-unit"
        {...props}
    />
);

export default FormUnit;
