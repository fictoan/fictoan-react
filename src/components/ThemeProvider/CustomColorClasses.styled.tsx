import { css } from "styled-components";
import { GlobalStyledProps } from "./ThemeProvider";

export const CustomColorClassesStyled = css`
    .bg-hue      { background-color : ${(props: GlobalStyledProps) => props.theme.customColours.hue}; }
    .bg-tint     { background-color : ${(props: GlobalStyledProps) => props.theme.customColours.tint}; }
    .bg-analogue { background-color : ${(props: GlobalStyledProps) => props.theme.customColours.analogue}; }
    .bg-shade    { background-color : ${(props: GlobalStyledProps) => props.theme.customColours.shade}; }
    .bg-accent   { background-color : ${(props: GlobalStyledProps) => props.theme.customColours.accent}; }

    .text-hue      { color : ${(props: GlobalStyledProps) => props.theme.customColours.hue}; }
    .text-tint     { color : ${(props: GlobalStyledProps) => props.theme.customColours.tint}; }
    .text-analogue { color : ${(props: GlobalStyledProps) => props.theme.customColours.analogue}; }
    .text-shade    { color : ${(props: GlobalStyledProps) => props.theme.customColours.shade}; }
    .text-accent   { color : ${(props: GlobalStyledProps) => props.theme.customColours.accent}; }

    .border-hue      { border : 2px solid ${(props: GlobalStyledProps) => props.theme.customColours.hue}; }
    .border-tint     { border : 2px solid ${(props: GlobalStyledProps) => props.theme.customColours.tint}; }
    .border-analogue { border : 2px solid ${(props: GlobalStyledProps) => props.theme.customColours.analogue}; }
    .border-shade    { border : 2px solid ${(props: GlobalStyledProps) => props.theme.customColours.shade}; }
    .border-accent   { border : 2px solid ${(props: GlobalStyledProps) => props.theme.customColours.accent}; }

    .fill-hue      { fill : ${(props: GlobalStyledProps) => props.theme.customColours.hue}; }
    .fill-tint     { fill : ${(props: GlobalStyledProps) => props.theme.customColours.tint}; }
    .fill-analogue { fill : ${(props: GlobalStyledProps) => props.theme.customColours.analogue}; }
    .fill-shade    { fill : ${(props: GlobalStyledProps) => props.theme.customColours.shade}; }
    .fill-accent   { fill : ${(props: GlobalStyledProps) => props.theme.customColours.accent}; }

    .stroke-hue      { stroke : ${(props: GlobalStyledProps) => props.theme.customColours.hue}; }
    .stroke-tint     { stroke : ${(props: GlobalStyledProps) => props.theme.customColours.tint}; }
    .stroke-analogue { stroke : ${(props: GlobalStyledProps) => props.theme.customColours.analogue}; }
    .stroke-shade    { stroke : ${(props: GlobalStyledProps) => props.theme.customColours.shade}; }
    .stroke-accent   { stroke : ${(props: GlobalStyledProps) => props.theme.customColours.accent}; }
`;
