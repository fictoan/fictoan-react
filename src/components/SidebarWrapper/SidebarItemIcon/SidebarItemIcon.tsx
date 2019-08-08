import React, { HTMLProps } from "react";

import { BaseComponent } from "../../BaseComponent";

const SidebarItemIcon = (props: HTMLProps<HTMLDivElement>) => (
    <BaseComponent<HTMLDivElement>
        Element="div"
        baseClassName="sidebar-icon"
        {...props}
    />
);

export default SidebarItemIcon;
