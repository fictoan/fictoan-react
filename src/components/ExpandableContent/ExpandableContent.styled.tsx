import styled from "styled-components";
import { ExpandableContentProps } from "./ExpandableContent";

export const ExpandableContentStyled = styled.details`
    cursor: pointer;
    
    summary {
        position : relative;
        & > * {
            padding-right: 32px;
        }
    }
    
    & > summary::after {
        content      : "";
        display      : inline-block;
        position     : absolute;
        top          : 50%;
        right        : 12px;
        width        : 8px;
        height       : 8px;
        border-style : solid;
        border-width : 0 2px 2px 0;
        transform    : translateY(-50%) rotate(45deg);
        color        : ${(props: ExpandableContentProps) => props.theme.sidebar.linksWrapper.subLinks.chevron.border};
        transition   : transform 0.2s linear;
        cursor       : pointer;
    }

    &[open] > summary::after {
        transform : translateY(-50%) rotate(225deg);
    }
`;
