import React from 'react';

import { BaseComponent } from '../../BaseComponent';
import { PropType } from "../../typings";

type SidebarItemTextProps = PropType & {linkText:string};
const SidebarItemText = ({ linkText, ...props }:SidebarItemTextProps) => (
    // @ts-ignore
    <BaseComponent
        Element="p"
        baseClassName="sidebar-text"
        {...props}
    >
        {linkText}
    </BaseComponent>
);

export default SidebarItemText
