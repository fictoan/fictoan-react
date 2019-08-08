import React, { HTMLProps } from "react";
import { BaseComponent } from "../BaseComponent";

const Portion = (props: HTMLProps<HTMLDivElement>) => (
    <BaseComponent<HTMLDivElement>
        Element="div"
        baseClassName="portion"
        {...props}
    />
);

export default Portion;
