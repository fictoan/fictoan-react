import React from 'react';

import { BaseComponent } from '../../BaseComponent';
import { PropType } from "../../typings";


const SidebarItem = (props:PropType) =>
    <BaseComponent
        Element="div"
        baseClassName="sidebar-item"
        {...props}
    />

export default SidebarItem
