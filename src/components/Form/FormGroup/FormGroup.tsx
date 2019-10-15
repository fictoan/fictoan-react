import React, { HTMLProps } from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";

const FormGroup = (props: HTMLProps<HTMLDivElement>) => (
    <BaseComponent<HTMLDivElement>
        Element="div"
        baseClassName="ff-input-group"
        {...props}
    />
);

export default FormGroup;
