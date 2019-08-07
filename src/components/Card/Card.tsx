import React, { HTMLProps } from "react";

import { BaseComponent } from "../BaseComponent";

const Card = (props: HTMLProps<HTMLDivElement>) => (
    <BaseComponent<HTMLProps<HTMLDivElement>, HTMLDivElement>
        Element="div"
        baseClassName="ff-card"
        {...props}
    />
);

export default Card;
