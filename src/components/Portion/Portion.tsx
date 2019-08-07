import React, { HTMLProps } from "react";
import { BaseComponent } from "../BaseComponent";

const Portion = (props: HTMLProps<HTMLDivElement>) => (
    <BaseComponent<HTMLProps<HTMLDivElement>, HTMLDivElement>
        Element="div"
        baseClassName="portion"
        {...props}
    />
);

export default Portion;
