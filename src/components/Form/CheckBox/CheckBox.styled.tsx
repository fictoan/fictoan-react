import styled, { css } from "styled-components";

const SharedStyling = css`
    display        : inline-flex;
    flex-direction : row;
    align-items    : center;
    margin-right   : 24px;

    &:only-of-type { margin-right : 0; }

    label {
        display     : inline-flex;
        position    : relative;
        font-family : $fontSans;
        color       : $colorShade;
        cursor      : pointer;
        line-height : 1;
        user-select : none;

        &::before, &::after {
            display    : inline-flex;
            content    : "";
            transition : all 0.1s ease-out;
        }
    }

    //  The grey square
    label::before,
    input[type="checkbox"]:disabled + label::before {
        user-select    : none;
        pointer-events : none;
        background     : $colorGrey-20;
        box-shadow     : 0 2px 4px -2px hsla(0, 0, 0, 0.24) inset;
    }

    &:hover label::before { background : $colorGrey-30; }

    //  The grey square
    label::after { opacity : 0; }

    input[type="checkbox"]:checked + label::before { background : $colorHue; }

    input[type="checkbox"]:disabled + label,
    input[type="checkbox"]:disabled:checked + label {
        pointer-events : none;
        cursor         : default;
        opacity        : 0.24;
    }
`;

export const CheckBoxStyled = styled.div`
    //  CHECKBOX, SWITCH and RADIO BUTTONS  =======================================
    input[type="checkbox"] { display : none; }

    //  CHECKBOX  =================================================================
    //  The grey square
    label::before {
        position      : absolute;
        height        : 16px;
        width         : 16px;
        top           : 0;
        left          : 0;
        border-radius : 4px;
    }

    //  The white tick inside
    label::after {
        position      : absolute;
        height        : 6px;
        width         : 12px;
        left          : 2px;
        top           : 4px;
        border-left   : 2px solid $colorWhite;
        border-bottom : 2px solid $colorWhite;
        transform     : rotate(-45deg);
    }

    ${SharedStyling}

    label { padding-left : 24px; }
    input[type="checkbox"]:checked + label::after { opacity : 1; }
`;

export const SwitchStyled = styled.div`
    //  CHECKBOX, SWITCH and RADIO BUTTONS  =======================================
    input[type="checkbox"] { display : none; }

    //  TOGGLE SWITCH  ============================================================
    //  The grey oblong
    label::before {
        position      : absolute;
        top           : 2px;
        left          : 0;
        width         : 24px;
        height        : 12px;
        border-radius : 8px;
        margin-right  : 4px;
    }

    //  The white inner circle
    label::after {
        position      : absolute;
        display       : inline-block;
        width         : 8px;
        height        : 8px;
        left          : 2px;
        top           : 4px;
        background    : $colorWhite;
        border-radius : 50%;
        content       : '';
        transition    : all 0.1s ease-out;
        box-shadow    : 0 2px 4px -2px hsla(0, 0, 0, 0.6);
    }

    input[type="checkbox"]:checked + label::after { left : 14px; }

    ${SharedStyling}

    label { padding-left : 32px; }
`;
