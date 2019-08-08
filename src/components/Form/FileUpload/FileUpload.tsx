import React, { HTMLProps } from "react";

import { BaseComponent } from "../../BaseComponent";

const FileUpload = (props: HTMLProps<HTMLDivElement>) => (
    // @ts-ignore
    <BaseComponent<HTMLProps<HTMLDivElement>, HTMLDivElement>
        Element="input"
        baseClassName="ff-input"
        type="file"
        {...props}
    />
);

export default FileUpload;
