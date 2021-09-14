import styled from "styled-components";

export const TooltipStyled = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    
    /* START TOOLTIP STYLES */
    .tooltip {
        position: absolute;
        font-size: .9em;
        opacity: 0;
        white-space: nowrap;
        width: fit-content;
    }

    /* POSITION: TOP */
    .tooltip.top {
        left: 50%;
        bottom: calc(100% + 5px);
        transform: translate(-50%, -.5em);
    }

    /* POSITION: BOTTOM */
    .tooltip.bottom {
        left: 50%;
        top: calc(100% + 5px);
        transform: translate(-50%, .5em);
    }

    /* POSITION: LEFT */
    .tooltip.left {
        top: 50%;
        right: calc(100% + 5px);
        transform: translate(-.5em, -50%);
    }

    /* POSITION: RIGHT */
    .tooltip.right {
        top: 50%;
        left: calc(100% + 5px);
        transform: translate(.5em, -50%);
    }

    /* KEYFRAMES */
    @keyframes tooltips-vert {
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }

    @keyframes tooltips-horz {
        to {
            opacity: 1;
            transform: translate(0, -50%);
        }
    }

    .tooltip.top,
    .tooltip.bottom {
        animation: tooltips-vert 300ms cubic-bezier(.84,-0.18,.31,1.26) forwards;
    }

    .tooltip.left,
    .tooltip.right {
        animation: tooltips-horz 300ms cubic-bezier(.84,-0.18,.31,1.26) forwards;
    }
`;
