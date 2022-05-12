import styled from "styled-components";

import { InputFieldProps } from "./InputField";


export const InputFieldStyled = styled.input`
    position         : relative;
    width            : 100%;
    flex             : 1 1 auto;
    font-family      : ${(props: InputFieldProps) => props.theme.text.font.sans};
    color            : ${(props: InputFieldProps) => props.theme.inputField.default.text};
    background-color : ${(props: InputFieldProps) => props.theme.inputField.default.bg};
    border           : 1px solid ${(props: InputFieldProps) => props.theme.inputField.default.border};
    border-radius    : ${(props : InputFieldProps) => props.theme.inputField.default.borderRadius};
    padding          : 12px;
    line-height      : 1;

    &:active,
    &:focus {
        background-color : ${(props: InputFieldProps) => props.theme.inputField.onFocus.bg};
        border           : 2px solid ${(props : InputFieldProps) => props.theme.inputField.onFocus.border};
        color            : ${(props: InputFieldProps) => props.theme.inputField.onFocus.text};
        padding          : 11px;
    }

    &[type=password] { letter-spacing : 4px; }

    &[type=password]:placeholder-shown { letter-spacing : unset; }

    /*  LEFT AND  RIGHT ICONS  ============================================  */
    &.with-icon-left  { padding-left : 40px; }
    &.with-icon-right { padding-right : 40px; }

    span.icon-left,
    span.icon-right {
        position : absolute;
        bottom   : 12px;
        width    : 24px;
        height   : 24px;
    }

    span.icon-left svg,
    span.icon-right svg {
        fill       : ${(props: InputFieldProps) => props.theme.inputField.icons.default.fill};
        transition : all 0.2s;
        width      : 24px;
        height     : 24px;
    }

    span.icon-left { left : 8px; }

    span.icon-right {
        right   : 8px;
        opacity : 0.24;
    }

    &.with-icon-left:focus ~ span.icon-left svg {
        fill : ${(props: InputFieldProps) => props.theme.inputField.icons.onFocus.fill};
    }

    /*  Grey check mark  */
    &.validate-this {
        padding-right       : 40px;
        background-image    : url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+ICA8cG9seWxpbmUgcG9pbnRzPSIzLjUgMTIuNSA4LjUgMTcuNSAyMC41IDUuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTJlMmUyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==);
        background-repeat   : no-repeat;
        background-position : right 12px top 56%;
        background-size     : 24px;

        &:focus {
            background-position : right 11px top 56%;
        }
    }

    &.validate-this ~ span.icon-right { display : none; }

    /*  Green check mark  */
    &.validate-this:valid:not(:placeholder-shown) {
        background-image : url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+ICA8cG9seWxpbmUgcG9pbnRzPSIzLjUgMTIuNSA4LjUgMTcuNSAyMC41IDUuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGVjMDVjIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==);
    }

    /*  Red cross  */
    &:invalid:not(:focus):not(:placeholder-shown) {
        border              : 1px solid ${(props: InputFieldProps) => props.theme.inputField.icons.isValid.border};
        background-color    : ${(props: InputFieldProps) => props.theme.inputField.isInvalid.bg};
        background-image    : url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+ICA8bGluZSB4MT0iNi41IiB5MT0iMTcuNSIgeDI9IjE4LjUiIHkyPSI1LjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2VmNDM0MyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4gIDxsaW5lIHgxPSI2LjUiIHkxPSI1LjUiIHgyPSIxOC41IiB5Mj0iMTcuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWY0MzQzIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==);
        background-repeat   : no-repeat;
        background-position : 98%;
        background-size     : 24px;
    }
`;
