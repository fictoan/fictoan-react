import React, { HTMLProps } from "react";

import { BaseComponent } from "../../BaseComponent";

const InputField = (props: HTMLProps<HTMLDivElement>) => {
    return (
        <BaseComponent<HTMLProps<HTMLDivElement>, HTMLDivElement>
            Element="textarea"
            baseClassName="ff-input"
            {...props}
        />
    );
};

export default InputField;
