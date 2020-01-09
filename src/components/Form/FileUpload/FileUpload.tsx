import React, { HTMLProps } from "react";

import { Element } from "../../Element/Element";

const FileUpload = (props: HTMLProps<HTMLDivElement>) => (
    // @ts-ignore
    <Element<HTMLDivElement>
        as="input"
        baseClassName="ff-input"
        type="file"
        {...props}
    />
);

export default FileUpload;
