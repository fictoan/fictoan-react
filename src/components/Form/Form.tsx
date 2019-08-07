import React, { HTMLProps } from "react";

import { BaseComponent } from "../BaseComponent";

const Form = (props: HTMLProps<HTMLFormElement>) => (
    <BaseComponent<HTMLProps<HTMLFormElement>, HTMLFormElement>
        Element="form"
        baseClassName="ff-form"
        {...props}
    />
);

export default Form;
