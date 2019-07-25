import React from 'react'

import { BaseComponent } from '../BaseComponent';
import { PropType } from "../typings";


const Card = (props: PropType) =>
    <BaseComponent
        Element="div"
        baseClassName="ff-card"
        {...props}
    />

export default Card
