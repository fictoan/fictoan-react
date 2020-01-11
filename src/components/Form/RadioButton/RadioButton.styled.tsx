import styled from "styled-components";

export const RadioButtonStyled = styled.div`
    input[type="radio"] { display : none; }

    display      : inline-block;
    margin-right : 24px;


    /*  The grey outer circle  */
    label::before {
        width         : 16px;
        height        : 16px;
        top           : 4px;
        left          : 0;
        border-radius : 50%;
    }

    /*  The white inner circle  */
    label::after {
        opacity       : 0;
        left          : 4px;
        top           : 8px;
        width         : 8px;
        height        : 8px;
        background    : $colorWhite;
        border-radius : 50%;
    }

    &:only-of-type { margin-right : 0; }

    label {
        display        : inline-block;
        position       : relative;
        font-family    : $fontSans;
        color          : $colorShade;
        cursor         : pointer;
        vertical-align : middle;
        line-height    : 1.1;
        padding-left : 24px;

        &::before,
        &::after {
            display    : inline-block;
            position   : absolute;
            content    : "";
            transition : all 0.1s ease-out;
        }
    }

    /*  The grey square  */
    input[type="radio"]:disabled + label::before,
    label::before {
        user-select    : none;
        pointer-events : none;
        background     : $colorGrey-20;
        box-shadow     : 0 2px 8px -2px hsla(0, 0, 0, 0.24) inset;
    }

    &:hover label::before { background : $colorGrey-30; }

    /*  The grey square  */
    label::after { opacity : 0; }

    input[type="radio"]:checked    + label::before { background : $colorHue; }

    input[type="radio"]:checked    + label::after { opacity : 1; }

    input[type="radio"]:disabled            + label,
    input[type="radio"]:disabled:checked    + label  {
        pointer-events : none;
        cursor         : default;
        opacity        : 0.24;
    }
`
