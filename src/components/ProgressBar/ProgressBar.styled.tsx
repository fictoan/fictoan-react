import styled from "styled-components";

import { ProgressBarProps } from "./ProgressBar";


export const ProgressBarStyled = styled.progress`
    display        : flex;
    flex-wrap      : wrap;
    flex-direction : row;
    width          : 100%;

    .progress-label {
        font-weight   : bold;
        margin-top    : 0;
        margin-bottom : 8px;
        flex          : 0 1 70%;
    }

    .progress-value {
        text-align    : right;
        margin-top    : 0;
        margin-bottom : 8px;
        flex          : 0 1 30%;
    }

    &[value] {
        position      : relative;
        flex          : 1 1 100%;
        height        : 8px;
        border-radius : 8000px;
        background    : ${(props: ProgressBarProps) => props.theme.progressBar.bg};
        box-shadow    : 0 2px 8px -2px hsla(0, 0, 0, 0.24) inset;
    }
    
    &.is-thin[value] { height : 4px; }

    &[value]::-webkit-progress-bar {
        border-radius      : 8000px;
        background         : ${(props: ProgressBarProps) => props.theme.progressBar.bg};
        box-shadow         : 0 2px 8px -2px hsla(0, 0, 0, 0.24) inset;
    }

    &::-webkit-progress-value {
        border-radius      : 8000px;
        background         : ${(props: ProgressBarProps) => props.theme.progressBar.fill};
    }

    &[value]::-moz-progress-bar {
        border-radius : 8000px;
        background    : ${(props: ProgressBarProps) => props.theme.progressBar.fill};
    }
`;
