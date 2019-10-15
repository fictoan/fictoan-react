import React, { HTMLProps } from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";

const SidebarItem = (props: HTMLProps<HTMLDivElement>) => (
    <BaseComponent<HTMLDivElement>
        Element="div"
        baseClassName="sidebar-item"
        {...props}
    />
);

export default SidebarItem;
