import React from 'react';

import { BaseComponent } from '../BaseComponent';

const Row = (props) =>
    <BaseComponent
        Element="div"
        baseClassName="row"
        {...props}
    />

export default Row
