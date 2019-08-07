import React, { HTMLProps } from "react";

import { BaseComponent } from "../../BaseComponent";

const SidebarHeader = (props: HTMLProps<HTMLDivElement>) => (
    <BaseComponent<HTMLProps<HTMLDivElement>, HTMLDivElement>
        Element="div"
        baseClassName="sidebar-header"
        {...props}
    />
);

export default SidebarHeader;
