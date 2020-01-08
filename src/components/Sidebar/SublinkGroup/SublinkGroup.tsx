import React from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";

import { SublinkGroupStyled } from "../SublinkGroup/SublinkGroup.styled";
import { SublinkGroupProps, SublinkGroupElementType } from "../constants";

export const SublinkGroup = (props: SublinkGroupProps) => (
    <BaseComponent<SublinkGroupElementType>
        Element={SublinkGroupStyled}
        {...props}
    />
);
