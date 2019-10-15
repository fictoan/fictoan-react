import React, { HTMLProps } from "react";

import { BaseComponent } from "../BaseComponent/BaseComponent";

const Table = (props: HTMLProps<HTMLTableElement>) => (
    <BaseComponent<HTMLTableElement>
        Element="table"
        baseClassName="ff-table"
        {...props}
    />
);

export default Table;
