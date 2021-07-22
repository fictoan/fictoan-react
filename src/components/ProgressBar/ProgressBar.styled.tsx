import styled, { css } from "styled-components";

import { defaultColours } from "../../styles/DefaultColours";
import { ProgressBarMetaProps, ProgressBarProps } from "./ProgressBar";

const convertToFictoanColor = (colorString:string) => {
    if (!colorString) return null

    const c:string = colorString.replace('-', '');

    return defaultColours.hasOwnProperty(c) ? defaultColours[c] : null
}

export const ProgressBarMetaStyled = styled.div`
    display         : flex;
    align-items     : baseline;
    justify-content : space-between;
    margin-bottom   : 8px;

    p:first-of-type {
        display       : inline-flex;
        font-weight   : bold;
        margin        : 0;
        color         : ${(props: ProgressBarMetaProps) => props.theme.progressBar.label};
    }

    p:last-of-type {
        display    : inline-flex;
        text-align : right;
        margin     : 0;
        color      : ${(props: ProgressBarMetaProps) => props.theme.progressBar.value};

        &::after {
            display : inline-flex;
            content : "${(props: ProgressBarMetaProps) => props.unit}";
        }
    }
`;

export const ProgressBarStyled = styled.progress`
    display        : flex;
    flex-wrap      : wrap;
    flex-direction : row;
    width          : 100%;

    &[value] {
        position   : relative;
        flex       : 1 1 100%;
        height     : ${(props: ProgressBarProps) => props.height};
        background : ${(props: ProgressBarProps) => convertToFictoanColor(props.barBg) || props.theme.progressBar.bg};
        box-shadow : 0 2px 8px -2px hsla(0, 0, 0, 0.24) inset;
    }

    &[value]::-webkit-progress-bar {
        background : ${(props: ProgressBarProps) => convertToFictoanColor(props.barBg) || props.theme.progressBar.bg};
        box-shadow : 0 2px 8px -2px hsla(0, 0, 0, 0.24) inset;
    }

    &::-webkit-progress-value,
    &[value]::-moz-progress-bar {
        background : ${(props: ProgressBarProps) => convertToFictoanColor(props.barFill) || props.theme.progressBar.fill};
    }

    &.shape-rounded::-webkit-progress-value, &.shape-rounded, &.shape-rounded::-webkit-progress-bar {
        border-radius : ${(props: ProgressBarProps) => props.theme.progressBar.borderRadius};
    }

    &.shape-curved::-webkit-progress-value, &.shape-curved, &.shape-curved::-webkit-progress-bar {
        border-radius : 8000px;
    }
`;
