import React, { HTMLProps } from "react";

import { BaseComponent } from "../BaseComponent";

const Card = (props: HTMLProps<HTMLDivElement>) => (
    <BaseComponent<HTMLDivElement>
        Element="div"
        baseClassName="ff-card"
        {...props}
    />
);

export default Card;
