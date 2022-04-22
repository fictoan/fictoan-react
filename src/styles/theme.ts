import lighten from "polished/lib/color/lighten";
import darken from "polished/lib/color/darken";

import { defaultColours } from "./DefaultColours";

type CustomColoursType = { [k in string]: string };

export const customColours = {
    hue      : defaultColours.blue90,
    tint     : defaultColours.amber,
    shade    : defaultColours.grey,
    analogue : defaultColours.indigo50,
    accent   : defaultColours.green80
} as const;

export const FictoanTheme = {
    customColours : customColours as CustomColoursType,

    //  GLOBALS  //////////////////////////////////////////////////////////////
    globals : {
        borderWidth : "1px"
    },

    //  BASICS  ///////////////////////////////////////////////////////////////
    body : {
        bg : String(defaultColours.white)
    },


    //  BREADCRUMBS  ///////////////////////////////////////////////////////////
    breadcrumbs : {
        wrapper   : {
            bg : String(defaultColours.white)
        },
        item      : {
            text     : String(customColours.shade),
            active   : String(customColours.shade),
            inactive : String(customColours.shade)
        },
        separator : {
            text    : String(defaultColours.slate80),
            content : "\"/\""
        }
    },


    //  BUTTON  ///////////////////////////////////////////////////////////////
    button : {
        font      : "sans-serif",
        isLoading : {
            spinnerBorder : String(customColours.hue)
        },
        primary   : {
            default   : {
                bg           : String(customColours.hue),
                border       : String(customColours.hue),
                text         : String(defaultColours.white),
                borderRadius : "4px"
            },
            onHover   : {
                bg     : String(customColours.hue),
                border : String(customColours.hue),
                text   : String(defaultColours.white)
            },
            isActive  : {
                bg     : String(customColours.hue),
                border : String(customColours.hue),
                text   : String(defaultColours.white)
            },
            isLoading : {
                spinnerBorder : String(defaultColours.white)
            }
        },
        secondary : {
            default   : {
                bg           : `${lighten(0.4, String(customColours.hue))}`,
                border       : String(customColours.hue),
                text         : String(customColours.hue),
                borderRadius : "4px"
            },
            onHover   : {
                bg     : `${lighten(0.4, String(customColours.hue))}`,
                border : String(customColours.hue),
                text   : String(customColours.hue)
            },
            isActive  : {
                bg     : `${lighten(0.2, String(customColours.hue))}`,
                border : String(customColours.hue),
                text   : String(customColours.hue)
            },
            isLoading : {
                spinnerBorder : String(customColours.hue)
            }
        },
        tertiary  : {
            default   : {
                bg           : String(defaultColours.transparent),
                border       : String(customColours.hue),
                text         : String(customColours.hue),
                borderRadius : "4px"
            },
            onHover   : {
                bg     : `${lighten(0.40, String(customColours.hue))}`,
                border : String(defaultColours.transparent),
                text   : String(customColours.hue)
            },
            isActive  : {
                bg     : `${lighten(0.32, String(customColours.hue))}`,
                border : String(defaultColours.transparent),
                text   : String(customColours.hue)
            },
            isLoading : {
                spinnerBorder : String(customColours.hue)
            }
        }
    },


    //  CARD  /////////////////////////////////////////////////////////////////
    card : {
        bg           : String(defaultColours.white),
        border       : `${lighten(0.96, String(defaultColours.black))}`,
        borderRadius : "4px"
    },


    //  RULE  /////////////////////////////////////////////////////////////////
    hr : {
        default   : {
            bg     : String(defaultColours.blue80),
            height : "1px"
        },
        primary   : {
            bg     : String(defaultColours.blue80),
            height : "1px"
        },
        secondary : {
            bg     : String(defaultColours.slate40),
            height : "1px"
        },
        tertiary  : {
            bg     : String(defaultColours.slate20),
            height : "1px"
        }
    },


    //  INPUT  ////////////////////////////////////////////////////////////////
    inputField : {
        default    : {
            bg           : String(defaultColours.white),
            border       : String(defaultColours.slate40),
            label        : String(customColours.shade),
            text         : String(customColours.shade),
            borderRadius : "4px",
            helpText     : String(defaultColours.slate60)
        },
        onFocus    : {
            bg       : String(defaultColours.white),
            border   : String(customColours.hue),
            text     : String(customColours.shade),
        },
        isValid    : {
            bg     : String(defaultColours.white),
            border : String(defaultColours.green80),
            label  : String(customColours.shade)
        },
        isInvalid  : {
            bg        : String(defaultColours.red10),
            border    : String(defaultColours.red80),
            label     : String(defaultColours.red),
            errorText : String(defaultColours.red)
        },
        isReadOnly : {
            bg     : String(defaultColours.slate10),
            border : String(defaultColours.slate20),
            text   : String(defaultColours.slate60),
            label  : String(customColours.shade)
        },
        required   : {
            text : String(defaultColours.red)
        },
        icons      : {
            default : {
                fill : String(defaultColours.slate30)
            },
            onFocus : {
                fill : String(customColours.hue)
            },
            isValid : {
                bg     : String(defaultColours.grey50),
                border : String(defaultColours.red30)
            }
        }
    },

    select : {
        chevron : String(customColours.hue)
    },

    radioButton : {
        inset  : {
            default    : {
                bg : String(defaultColours.slate20)
            },
            onHover    : {
                bg : String(defaultColours.slate40)
            },
            isSelected : {
                bg : String(customColours.hue)
            },
            isDisabled : {
                bg : String(defaultColours.slate10)
            }
        },
        circle : {
            default : {
                bg : String(defaultColours.white)
            }
        }
    },

    checkBox : {
        square : {
            default    : {
                bg : String(defaultColours.slate20)
            },
            onHover    : {
                bg : String(defaultColours.slate40)
            },
            isChecked  : {
                bg : String(customColours.hue)
            },
            isDisabled : {
                bg : String(defaultColours.slate10)
            }
        },
        check  : {
            default : {
                border : String(defaultColours.white)
            }
        }
    },

    toggleSwitch : {
        switch : {
            default   : {
                bg : String(defaultColours.white)
            },
            isChecked : {
                bg : String(defaultColours.white)
            }
        }
    },


    //  INFO PANEL  ///////////////////////////////////////////////////////////
    infoPanel : {
        bg            : String(defaultColours.white),
        border        : String(defaultColours.slate20),
        dismissButton : {
            color : String(defaultColours.slate90)
        }
    },


    //  NOTIFICATION  /////////////////////////////////////////////////////////
    notification : {
        default : {
            bg   : String(defaultColours.white),
            text : String(customColours.shade)
        },
        kinds   : {
            info    : {
                border : String(defaultColours.blue60)
            },
            warning : {
                border : String(defaultColours.amber)
            },
            error   : {
                border : String(defaultColours.red90)
            },
            success : {
                border : String(defaultColours.green90)
            }
        }
    },


    //  PROGRESS BAR  /////////////////////////////////////////////////////////
    progressBar : {
        bg           : String(defaultColours.slate20),
        fill         : String(customColours.hue),
        label        : String(customColours.shade),
        value        : String(customColours.shade),
        borderRadius : "4px"
    },


    //  SIDEBAR  //////////////////////////////////////////////////////////////
    sidebar : {
        width : "240px",
        bg    : String(defaultColours.white),

        isCollapsed : {
            width : "48px",
            label : {
                text : String(defaultColours.white),
                bg   : String(customColours.hue)
            }
        },

        header : {
            bg           : String(defaultColours.white),
            borderBottom : String(defaultColours.slate10),
            logoWidth    : "50%"
        },

        icons : {
            size    : "24px",
            stroked : {
                thickness : 2,
                default   : {
                    line : String(defaultColours.slate40)
                },
                onHover   : {
                    line : String(defaultColours.slate80)
                },
                isActive  : {
                    line : String(defaultColours.slate)
                }
            },
            filled  : {
                default  : {
                    bg : String(defaultColours.slate40)
                },
                onHover  : {
                    bg : String(defaultColours.slate80)
                },
                isActive : {
                    bg : String(defaultColours.slate)
                }
            }
        },

        links : {
            default    : {
                bg     : String(defaultColours.white),
                text   : String(customColours.shade),
                scale  : 100,
                weight : 600
            },
            onHover    : {
                bg   : String(defaultColours.slate10),
                text : String(customColours.hue)
            },
            isSelected : {
                bg     : String(defaultColours.white),
                border : String(customColours.hue),
                text   : String(customColours.hue)
            },
            hasAlert   : {
                bg : String(defaultColours.red70)
            }
        },

        subLinks : {
            header  : {
                weight : 600
            },
            default : {
                bg     : String(defaultColours.white),
                text   : `${lighten(0.24, String(customColours.shade))}`,
                weight : 400,
                scale  : 92
            },
            onHover : {
                bg   : String(defaultColours.slate10),
                text : String(customColours.hue)
            },
            chevron : {
                border : String(defaultColours.slate40)
            }
        },

        footer : {
            height    : "32px",
            bg        : String(defaultColours.white),
            borderTop : String(defaultColours.slate10)
        }
    },


    //  TABLE  ////////////////////////////////////////////////////////////////
    table : {
        bg      : String(defaultColours.white),
        text    : String(customColours.shade),
        border  : String(defaultColours.slate40),
        striped : {
            header : {
                bg : String(defaultColours.blue40)
            },
            cell   : {
                bg : String(defaultColours.slate20)
            }
        },
        onHover : {
            bg   : String(defaultColours.amber20),
            text : String(customColours.shade)
        }
    },

    tablePagination : {
        bg   : String(defaultColours.white),
        text : String(defaultColours.grey),
        svg  : {
            onHover : {
                stroke : String(defaultColours.slate60)
            }
        }
    },


    //  TABS  ////////////////////////////////////////////////////////////////
    tabs : {
        label : {
            default    : {
                text : `${lighten(0.16, String(defaultColours.grey))}`
            },
            onHover    : {
                text : `${lighten(0.16, String(customColours.hue))}`
            },
            isActive   : {
                border : String(customColours.hue),
                text   : String(customColours.hue)
            },
            isDisabled : {
                text : `${darken(0.24, String(defaultColours.slate))}`
            },
            hasAlert   : {
                circle : {
                    bg     : String(defaultColours.red90),
                    border : String(defaultColours.slate10)
                }
            }
        }
    },


    //  TEXT  /////////////////////////////////////////////////////////////////
    text : {
        font : {
            sans  : "sans-serif",
            serif : "serif",
            mono  : "monospace"
        },

        paras : {
            font       : "sans-serif",
            size       : 1,
            color      : String(defaultColours.grey),
            weight     : 400,
            lineHeight : 1.64
        },

        headings : {
            font       : "sans-serif",
            color      : String(customColours.shade),
            weight     : 600,
            multiplier : 1.24,
            lineHeight : 1.24
        },

        links : {
            font    : "sans-serif",
            default : {
                color : String(defaultColours.blue90)
            },
            onHover : {
                color : String(defaultColours.blue60)
            }
        },

        selection : {
            bg   : String(customColours.hue),
            text : String(defaultColours.white)
        },

        code : {
            inline : {
                bg    : String(defaultColours.blue10),
                text  : String(defaultColours.blue90),
                scale : 80
            },
            block  : {
                bg         : `${lighten(0.02, String(defaultColours.slate10))}`,
                text       : String(defaultColours.blue70),
                scale      : 80,
                lineHeight : 1.8
            },
            prism  : {
                tokens : {
                    tag         : String(defaultColours.violet),
                    atrule      : String(defaultColours.teal90),
                    attrName    : String(defaultColours.orange),
                    attrValue   : String(defaultColours.green80),
                    boolean     : String(defaultColours.green80),
                    cdata       : String(defaultColours.grey70),
                    className   : String(defaultColours.red),
                    comment     : String(defaultColours.grey70),
                    constant    : String(defaultColours.green80),
                    deleted     : String(defaultColours.slate80),
                    delimiter   : String(defaultColours.grey90),
                    doctype     : String(defaultColours.grey90),
                    entity      : String(defaultColours.green80),
                    function    : String(defaultColours.orange),
                    hexcode     : String(defaultColours.green),
                    inserted    : String(defaultColours.green80),
                    italic      : String(defaultColours.green80),
                    keyword     : String(defaultColours.orange90),
                    namespace   : String(defaultColours.green80),
                    number      : String(defaultColours.green80),
                    operator    : String(defaultColours.pistachio),
                    plain       : String(defaultColours.grey),
                    prolog      : String(defaultColours.grey90),
                    property    : String(defaultColours.red90),
                    punctuation : String(defaultColours.grey60),
                    regex       : String(defaultColours.green80),
                    selector    : String(defaultColours.violet),
                    string      : String(defaultColours.crimson60),
                    symbol      : String(defaultColours.green80),
                    url         : String(defaultColours.green80),
                    variable    : String(defaultColours.orange80)
                },

                languages : {
                    css  : {
                        fallback : String(defaultColours.orange90)
                    },
                    html : {
                        fallback : String(defaultColours.grey)
                    },
                    js   : {
                        fallback : String(defaultColours.violet90)
                    },
                    json : {
                        fallback : String(defaultColours.teal),
                        tokens   : {
                            string : String(defaultColours.teal)
                        }
                    }
                }
            }
        },

        kbd : {
            bg   : String(defaultColours.grey10),
            text : String(defaultColours.grey)
        }
    },

    //  TOAST  ////////////////////////////////////////////////////////////////
    toast : {
        bg   : String(defaultColours.slate10),
        text : String(defaultColours.black)
    },

    //  LOADER  ///////////////////////////////////////////////////////////////
    spinner: {
        color: String(defaultColours.teal),
    }
};
