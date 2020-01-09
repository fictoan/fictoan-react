import styled from "styled-components";

export const SelectWrapperStyled = styled.div`
    position   : relative;
    width      : max-content;
    align-self : flex-start;

    &::after {
        position       : absolute;
        display        : block;
        content        : "\2303";
        top            : calc(50% - 18px);
        right          : 12px;
        font-size      : 24px;
        color          : $colorHue;
        line-height    : 1.2;
        border-color   : $colorHue;
        z-index        : 500;
        pointer-events : none;
        transform      : rotate(180deg);
    }
`;

export const SelectStyled = styled.div`
    display          : flex;
    height           : 100%;
    padding          : 12px 48px 12px 8px;
    background-color : $inputBG-DefaultColor;
    border           : none;
    border-radius    : 4px;
    font-family      : $fontSans;
    align-items      : center;
    border           : 1px solid #c5ccd3;
    width            : 100%;
`;
