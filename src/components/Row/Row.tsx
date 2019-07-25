import React from 'react';

import { BaseComponent } from '../BaseComponent';
import { PropType } from "../typings";

const Row = (props:PropType) =>
    <BaseComponent
        Element="div"
        baseClassName="row"
        {...props}
    />

export default Row
