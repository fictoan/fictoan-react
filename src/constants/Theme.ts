import { baseColors } from "./BaseColors"

const mainColors = {
    hue      : baseColors.amber,
    tint     : baseColors.indigo90,
    shade    : baseColors.grey,
    analogue : baseColors.indigo50,
    accent   : baseColors.green80,
}

export const RFTheme = {
    mainColors,

    body : {
        bg : baseColors.white
    },

    //  TEXT  /////////////////////////////////////////////////////////////////
    text : {
        size : {
            default    : 1,
            multiplier : 1.24,
        },

        paras : {
            color      : baseColors.grey,
            weight     : 400,
            lineHeight : 1.6,
        },

        headings : {
            color      : baseColors.grey,
            weight     : 600,
            lineHeight : 1.6
        },

        links : {
            default : baseColors.blue90,
            onHover : baseColors.blue60
        },

        selection : {
            bg   : mainColors.hue,
            text : baseColors.white
        }
    },

    card : {
        bg     : baseColors.white,
        border : baseColors.slate10
    },

    //  CODE  /////////////////////////////////////////////////////////////////
    code : {
        inline : {
            bg   : baseColors.slate10,
            text : baseColors.blue70
        },
        block : {
            bg   : baseColors.slate10,
            text : baseColors.blue70
        },
        prism: undefined
    },

    //  INPUT  ////////////////////////////////////////////////////////////////
    input : {
        default : {
            bg     : baseColors.white,
            border : baseColors.slate40,
            label  : mainColors.shade,
            text   : mainColors.shade
        },
        onFocus : {
            bg       : baseColors.white,
            border   : mainColors.hue,
            text     : mainColors.shade,
            helptext : mainColors.shade,
        },
        isValid : {
            bg     : baseColors.white,
            border : baseColors.green80,
            label  : mainColors.shade
        },
        isInvalid : {
            bg     : baseColors.red10,
            border : baseColors.green80,
            label  : mainColors.shade
        }
    },

    //  SIDEBAR  //////////////////////////////////////////////////////////////
    sidebar : {
        header    : baseColors.white,
        body      : baseColors.white,
        separator : baseColors.slate20,

        links : {
            bg          : baseColors.white,
            text        : baseColors.white,
            bgOnHover   : baseColors.slate20,
            textOnHover : baseColors.slate20,
            isSelected  : {
                bg   : mainColors.hue,
                text : baseColors.white,
            }
        },

        icons : {
            type : "stroke",
        },

        isCollapsed : {
            label : {
                text : mainColors.shade,
                bg   : mainColors.hue
            }
        }
    }
}
