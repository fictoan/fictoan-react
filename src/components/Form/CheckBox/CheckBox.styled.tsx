import styled, { css } from "styled-components";

import { CheckboxProps } from "./CheckBox";

/*  COMMON STYLES  ========================================================  */
const SharedStyling = css`
    display        : inline-flex;
    flex-direction : row;
    align-items    : center;
    margin-right   : 24px;

    &:only-of-type { margin-right : 0; }

    label {
        display     : inline-flex;
        position    : relative;
        font-family : ${(props: CheckboxProps) => props.theme.text.font.sans};
        color       : ${(props: CheckboxProps) => props.theme.text.paras.color};
        cursor      : pointer;
        line-height : 1;
        user-select : none;

        &::before,
        &::after {
            display    : inline-flex;
            content    : "";
            transition : all 0.1s ease-out;
        }
    }

    /*  The grey square */
    label::before,
    input[type="checkbox"]:disabled + label::before {
        user-select    : none;
        pointer-events : none;
        background     : ${(props: CheckboxProps) => props.theme.checkBox.square.default.bg};
        box-shadow     : 0 2px 4px -2px hsla(0, 0, 0, 0.24) inset;
    }

    &:hover label::before {
        background : ${(props: CheckboxProps) => props.theme.checkBox.square.onHover.bg};
    }

    label::after { opacity : 0; }

    input[type="checkbox"]:checked + label::before {
        background : ${(props: CheckboxProps) => props.theme.checkBox.square.isChecked.bg};
    }

    input[type="checkbox"]:disabled + label,
    input[type="checkbox"]:disabled:checked + label {
        pointer-events : none;
        cursor         : default;
        opacity        : 0.24;
    }
`;

/*  CHECKBOX  =============================================================  */
export const CheckBoxStyled = styled.div`

    ${SharedStyling}

    input[type="checkbox"] { display : none; }

    /*  The bg square */
    label::before {
        position      : absolute;
        height        : 16px;
        width         : 16px;
        top           : 0;
        left          : 0;
        border-radius : 4px;
    }

    /*  The white tick inside */
    label::after {
        position      : absolute;
        height        : 6px;
        width         : 12px;
        left          : 2px;
        top           : 4px;
        border-left   : 2px solid ${(props: CheckboxProps) => props.theme.checkBox.check.default.border};
        border-bottom : 2px solid ${(props: CheckboxProps) => props.theme.checkBox.check.default.border};
        transform     : rotate(-45deg);
    }

    label { padding-left : 24px; }

    input[type="checkbox"]:checked + label::after { opacity : 1; }
`;

/*  TOGGLE SWITCH  ========================================================  */
export const SwitchStyled = styled.div`

    ${SharedStyling}

    input[type="checkbox"] { display : none; }

    label { padding-left : 32px; }

    /*  The grey oblong */
    label::before {
        position      : absolute;
        top           : 2px;
        left          : 0;
        width         : 24px;
        height        : 12px;
        border-radius : 8px;
        margin-right  : 4px;
    }

    /*  The white inner circle */
    label::after {
        position      : absolute;
        display       : inline-block;
        width         : 8px;
        height        : 8px;
        left          : 2px;
        top           : 4px;
        background    : ${(props: CheckboxProps) => props.theme.toggleSwitch.switch.default.bg};
        border-radius : 50%;
        content       : "";
        transition    : all 0.1s ease-out;
        box-shadow    : 0 2px 4px -2px hsla(0, 0, 0, 0.6);
        opacity       : 1;
    }

    input[type="checkbox"]:checked + label::after {
        transform  : translateX(12px);
        background : ${(props: CheckboxProps) => props.theme.toggleSwitch.switch.isChecked.bg};
    }
`;
