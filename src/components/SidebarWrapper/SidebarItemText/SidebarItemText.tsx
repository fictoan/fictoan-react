import React, { HTMLProps } from "react";

import { BaseComponent } from "../../BaseComponent";

type SidebarItemTextProps = HTMLProps<HTMLParagraphElement> & {
    linkText: string;
};

const SidebarItemText = ({ linkText, ...props }: SidebarItemTextProps) => (
    <BaseComponent<HTMLProps<HTMLParagraphElement>, HTMLParagraphElement>
        Element="p"
        baseClassName="sidebar-text"
        {...props}
    >
        {linkText}
    </BaseComponent>
);

export default SidebarItemText;
