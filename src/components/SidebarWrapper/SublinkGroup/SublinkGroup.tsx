import React, { HTMLProps } from "react";

import { BaseComponent } from "../../BaseComponent";

const SidebarItem = (props: HTMLProps<HTMLDivElement>) => (
    <BaseComponent<HTMLDivElement>
        Element="div"
        baseClassName="sublink-group"
        {...props}
    />
);

export default SublinkGroup;
