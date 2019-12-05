import React, { HTMLProps } from "react";

import { createClassName } from "src/utils/classNames";

import { BaseComponent } from "../BaseComponent/BaseComponent";
import { BaseAndHTMLProps } from "../BaseComponent/typings";

interface TableProps extends BaseAndHTMLProps<HTMLTableElement> {
    bordered?: "rows" | "columns" | "all";
    striped?: boolean;
    hoverable?: boolean;
    fullWidth?: boolean;
}

const Table = ({ bordered, striped, hoverable, fullWidth, className, ...props }: TableProps) => {
    const classNames = [className];

    if (bordered) {
        classNames.push(`bordered-${bordered}`);
    }

    if (striped) {
        classNames.push("striped");
    }

    if (hoverable) {
        classNames.push("hoverable");
    }

    if (fullWidth) {
        classNames.push("full-width");
    }

    return <BaseComponent<HTMLTableElement>
        Element="table"
        baseClassName="ff-table"
        className={createClassName(classNames)}
        {...props}
    />
}

export default Table;
