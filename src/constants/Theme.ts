import { baseColors } from "./BaseColors"

export const mainColors = {
    hue      : baseColors.amber,
    tint     : baseColors.indigo90,
    shade    : baseColors.grey,
    analogue : baseColors.indigo50,
    accent   : baseColors.green80,
}

export const RFTheme = {
    mainColors,

    body: {
        bg : baseColors.white,
    },

    //  TEXT  /////////////////////////////////////////////////////////////////
    text: {
        font : {
            sans  : "sans-serif",
            serif : "serif",
            mono  : "monospace",
        },

        size: {
            default    : 1,
            multiplier : 1.24,
        },

        paras: {
            color      : baseColors.grey,
            weight     : 400,
            lineHeight : 1.64,
        },

        headings: {
            color      : baseColors.grey,
            weight     : 600,
            lineHeight : 1.24
        },

        links: {
            default : baseColors.blue90,
            onHover : baseColors.blue60
        },

        selection: {
            bg   : mainColors.hue,
            text : baseColors.white
        },

        code: {
            inline: {
                bg   : baseColors.slate10,
                text : baseColors.blue70
            },
            block: {
                bg   : baseColors.slate10,
                text : baseColors.blue70
            },
            prism : {}
        },
    },

    //  CARD  /////////////////////////////////////////////////////////////////
    card: {
        bg     : baseColors.white,
        border : baseColors.slate10
    },

    //  INFO PANEL  ///////////////////////////////////////////////////////////
    infoPanel: {
        bg     : baseColors.white,
        border : baseColors.slate20
    },

    //  BREADCRUMBS  ///////////////////////////////////////////////////////////
    breadcrumb: {
        wrapper: {
            bg : baseColors.white,
        },
        item: {
            text      : mainColors.shade,
            separator : baseColors.slate40,
            active    : mainColors.shade,
            inactive  : mainColors.shade
        }
    },

    //  BUTTON  ///////////////////////////////////////////////////////////////
    button: {
        border : mainColors.hue,
        loader : baseColors.white
    },

    hr: {
        bg : baseColors.slate20
    },

    //  INPUT  ////////////////////////////////////////////////////////////////
    input: {
        default: {
            bg     : baseColors.white,
            border : baseColors.slate40,
            label  : mainColors.shade,
            text   : mainColors.shade
        },
        onFocus: {
            bg       : baseColors.white,
            border   : mainColors.hue,
            text     : mainColors.shade,
            helptext : mainColors.shade,
        },
        isValid: {
            bg     : baseColors.white,
            border : baseColors.green80,
            label  : mainColors.shade
        },
        isInvalid: {
            bg     : baseColors.red10,
            border : baseColors.green80,
            label  : mainColors.shade
        }
    },

    //  SIDEBAR  //////////////////////////////////////////////////////////////
    sidebar: {
        header    : baseColors.white,
        body      : baseColors.white,
        separator : baseColors.slate20,

        links: {
            bg          : baseColors.white,
            text        : baseColors.white,
            bgOnHover   : baseColors.slate20,
            textOnHover : baseColors.slate20,
            isSelected  : {
                bg   : mainColors.hue,
                text : baseColors.white,
            },
            group : {
                bg          : baseColors.slate20,
                bgOnHover   : baseColors.slate10,
                text        : mainColors.shade,
                textOnHover : mainColors.hue
            }
        },

        icons: {
            type : "stroke",
        },

        isCollapsed: {
            label: {
                text : mainColors.shade,
                bg   : mainColors.hue
            }
        }
    },

    //  TABLE  ////////////////////////////////////////////////////////////////////
    table: {
        bg      : baseColors.white,
        text    : mainColors.shade,
        border  : baseColors.slate40,
        striped : {
            header: {
                bg : baseColors.blue40,

            },
            cell: {
                bg : baseColors.slate20,
            }
        },
        onHover: {
            bg   : baseColors.amber20,
            text : mainColors.shade
        }
    }
}
