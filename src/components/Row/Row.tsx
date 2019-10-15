import React, { HTMLProps } from "react";

import { BaseComponent } from "../BaseComponent/BaseComponent";

const Row = (props: HTMLProps<HTMLDivElement>) => (
    <BaseComponent<HTMLDivElement>
        Element="div"
        baseClassName="row"
        {...props}
    />
);

export default Row;
