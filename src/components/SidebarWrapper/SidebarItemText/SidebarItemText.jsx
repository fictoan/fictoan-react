import React from 'react';

import { BaseComponent } from '../../BaseComponent';

const SidebarItemText = ({ linkText, ...props }) => (
    <BaseComponent
        Element="p"
        baseClassName="sidebar-text"
        {...props}
    >
        {linkText}
    </BaseComponent>
);

export default SidebarItemText
