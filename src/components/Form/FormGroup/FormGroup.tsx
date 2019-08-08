import React, { HTMLProps } from "react";

import { BaseComponent } from "../../BaseComponent";

const FormGroup = (props: HTMLProps<HTMLDivElement>) => (
    <BaseComponent<HTMLProps<HTMLDivElement>, HTMLDivElement>
        Element="div"
        baseClassName="ff-input-group"
        {...props}
    />
);

export default FormGroup;
