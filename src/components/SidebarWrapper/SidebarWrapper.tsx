import React from 'react';

import { BaseComponent } from '../BaseComponent';
import { PropType } from "../typings";

const SidebarWrapper = (props:PropType) =>
    <BaseComponent
        Element="div"
        baseClassName="sidebar-wrapper"
        {...props}
    />

export default SidebarWrapper
