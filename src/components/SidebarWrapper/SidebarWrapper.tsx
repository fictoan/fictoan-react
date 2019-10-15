import React, { HTMLProps } from "react";

import { BaseComponent } from "../BaseComponent/BaseComponent";

const SidebarWrapper = (props: HTMLProps<HTMLDivElement>) => (
    <BaseComponent<HTMLDivElement>
        Element="div"
        baseClassName="sidebar-wrapper"
        {...props}
    />
);

export default SidebarWrapper;
