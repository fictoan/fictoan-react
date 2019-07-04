import React from 'react'

import { BaseComponent } from '../BaseComponent';

const Card = (props) =>
    <BaseComponent
        Element="div"
        baseClassName="ff-card"
        {...props}
    />

export default Card
