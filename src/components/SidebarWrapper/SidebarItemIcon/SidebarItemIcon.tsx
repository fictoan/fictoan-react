import React from 'react';

import { BaseComponent } from '../../BaseComponent';
import { PropType } from "../../typings";


const SidebarItemIcon = (props:PropType) =>
    <BaseComponent
        Element="div"
        baseClassName="sidebar-icon"
        {...props}
    />

export default SidebarItemIcon
