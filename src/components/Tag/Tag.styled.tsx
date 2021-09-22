import styled from "styled-components";
import transparentize from "polished/lib/color/transparentize";
import { TagProps } from "./Tag";
import { convertToFictoanColor } from "../../utils/helpers";

export const TagStyled = styled.div`
    width: fit-content;
    color: ${(props: TagProps) => convertToFictoanColor(props.color) || convertToFictoanColor("slate")};
    background-color: ${(props: TagProps) => props.bgColour || props.bgColor || transparentize(0.8, convertToFictoanColor(props.color) || convertToFictoanColor("slate"))};
    
    &:not([class*="padding-"]) {
        padding: 2px 10px;
    }
`;
