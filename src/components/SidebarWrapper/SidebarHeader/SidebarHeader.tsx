import React from 'react';

import { BaseComponent } from '../../BaseComponent';
import { PropType } from "../../typings";

const SidebarHeader = (props:PropType) =>
    <BaseComponent
        Element="div"
        baseClassName="sidebar-header"
        {...props}
    />

export default SidebarHeader
