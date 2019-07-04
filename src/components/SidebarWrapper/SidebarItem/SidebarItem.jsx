import React from 'react';

import { BaseComponent } from '../../BaseComponent';

const SidebarItem = (props) =>
    <BaseComponent
        Element="div"
        baseClassName="sidebar-item"
        {...props}
    />

export default SidebarItem
