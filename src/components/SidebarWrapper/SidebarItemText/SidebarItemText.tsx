import React, { HTMLProps } from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";

type SidebarItemTextProps = HTMLProps<HTMLParagraphElement> & {
    linkText: string;
};

const SidebarItemText = ({ linkText, ...props }: SidebarItemTextProps) => (
    <BaseComponent<HTMLParagraphElement>
        Element="p"
        baseClassName="sidebar-text"
        {...props}
    >
        {linkText}
    </BaseComponent>
);

export default SidebarItemText;
