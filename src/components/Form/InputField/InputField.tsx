import React, { HTMLProps, ReactElement } from "react";

import { BaseComponent } from "../../BaseComponent";

const InputField = (props: HTMLProps<HTMLInputElement>): ReactElement => {
    return (
        <BaseComponent<HTMLProps<HTMLInputElement>, HTMLInputElement>
            Element="input"
            baseClassName="ff-input"
            {...props}
        />
    );
};

export default InputField;
