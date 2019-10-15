import React, { HTMLProps } from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";

const SidebarHeader = (props: HTMLProps<HTMLDivElement>) => (
    <BaseComponent<HTMLDivElement>
        Element="div"
        baseClassName="sidebar-header"
        {...props}
    />
);

export default SidebarHeader;
