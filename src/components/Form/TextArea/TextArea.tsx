import React, { HTMLProps } from "react";

import { BaseComponent } from "../../BaseComponent";

const TextArea = (props: HTMLProps<HTMLTextAreaElement>) => {
    return (
        <BaseComponent<HTMLTextAreaElement>
            Element="textarea"
            baseClassName="ff-input"
            {...props}
        />
    );
};

export default TextArea;
