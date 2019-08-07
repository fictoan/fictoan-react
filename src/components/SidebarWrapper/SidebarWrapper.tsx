import React, { HTMLProps } from "react";

import { BaseComponent } from "../BaseComponent";

const SidebarWrapper = (props: HTMLProps<HTMLDivElement>) => (
    <BaseComponent<HTMLProps<HTMLDivElement>,HTMLDivElement>
        Element="div"
        baseClassName="sidebar-wrapper"
        {...props}
    />
);

export default SidebarWrapper;
