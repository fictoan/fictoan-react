import styled from "styled-components";

import { InfoPanelProps } from "./constants";

export const InfoPanelStyled = styled.div`
    .info-panel {
        display          : flex;
        position         : fixed;
        top              : 0;
        right            : -42vw;
        bottom           : 0;
        padding          : 2vw;
        flex-direction   : column;
        max-width        : 40vw;
        width            : auto;
        min-height       : 100vh;
        overflow-y       : auto;
        transition       : all 0.4s ease-in-out;
        background-color : ${(props : InfoPanelProps) => props.theme.infoPanel.bg};
        box-shadow       : 4px 0 24px -16px rgba(0, 0, 0, 0.24);
        z-index          : 10000;
        border-left      : 1px solid ${(props : InfoPanelProps) => props.theme.infoPanel.border};
    }

    .info-panel.open { right : 0; }

    .info-panel.tiny   { width : 6vw; }
    .info-panel.small  { width : 12vw; }
    .info-panel.medium { width : 24vw; }
    .info-panel.large  { width : 32vw; }
    .info-panel.huge   { width : 40vw; }
`
