import { createGlobalStyle } from "styled-components";

import { CustomColorClassesStyled } from "./CustomColorClasses.styled";
import { TypographyStyled } from "../Typography/Typography.styled";
import { GlobalStyledProps } from "./ThemeProvider";

export const GlobalStyled = createGlobalStyle`
    ${ CustomColorClassesStyled }
    ${ TypographyStyled }

    code {
        font-family : ${(props: GlobalStyledProps) => props.theme.text.font.mono};
    }

    /*  Inline code  =================================  */
    :not(pre) > code {
        margin           : 8px 0;
        border-radius    : 4px;
        padding          : 2px 8px;
        border           : none;
        background-color : ${(props: GlobalStyledProps) => props.theme.text.code.inline.bg};
        color            : ${(props: GlobalStyledProps) => props.theme.text.code.inline.text};
        font-size        : ${(props: GlobalStyledProps) => props.theme.text.code.inline.scale}%;
        font-weight      : normal;
        white-space      : pre-wrap;
    }

    @media all and (max-width : 720px) {
        code,
        :not(pre) > code {
            word-wrap   : break-word;
            white-space : normal;
        }

        pre { padding : 16px; }
    }

    /*  Keyboard key element  =================================  */
    kbd {
        display          : inline-block;
        font-family      : ${(props: GlobalStyledProps) => props.theme.text.font.mono};
        margin           : 0 4px;
        padding          : 4px 8px;
        color            : ${(props: GlobalStyledProps) => props.theme.text.kbd.text};
        background-color : ${(props: GlobalStyledProps) => props.theme.text.kbd.bg};
        cursor           : pointer;
        font-size        : 14px;
        line-height      : 1.4;
        border-radius    : 4px;
        text-shadow      : 0 1px 0 #fff;
        box-shadow       : 0 3px 0 0 rgba(0, 0, 0, 0.16);
        user-select      : none;

        &:active {
            transform  : translateY(3px);
            box-shadow : none;
        }
    }
`;
