import React, { HTMLProps } from "react";
import styled from "styled-components";

import { BaseComponent } from "../BaseComponent/BaseComponent";
import { BaseAndHTMLProps } from "../BaseComponent/typings";

type Props = BaseAndHTMLProps<HTMLParagraphElement>

const ParaStyled = styled(BaseComponent)`
    font-size   : 1em;
    font-family : sans-serif;
    color       : ${(props : Props) => props.theme.mainColors.shade};
`

export const Para = ({ ref, theme, ...props } : Props) => {
    return (
        <ParaStyled theme={theme} Element="p">
            {props.children}
        </ParaStyled>
    )
}
