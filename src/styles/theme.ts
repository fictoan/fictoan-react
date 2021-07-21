import { darken, lighten } from "polished";

import { defaultColours } from "./DefaultColours";


export const customColours = {
    hue      : defaultColours.blue90,
    tint     : defaultColours.amber,
    shade    : defaultColours.grey,
    analogue : defaultColours.indigo50,
    accent   : defaultColours.green80
};

export const FictoanTheme = {
    customColours : customColours,

    //  GLOBALS  //////////////////////////////////////////////////////////////
    globals : {
        borderWidth : "1px"
    },

    //  BASICS  ///////////////////////////////////////////////////////////////
    body : {
        bg : defaultColours.white
    },


    //  BREADCRUMBS  ///////////////////////////////////////////////////////////
    breadcrumbs : {
        wrapper   : {
            bg : defaultColours.white
        },
        item      : {
            text     : customColours.shade,
            active   : customColours.shade,
            inactive : customColours.shade
        },
        separator : {
            text    : defaultColours.slate80,
            content : "\"/\""
        }
    },


    //  BUTTON  ///////////////////////////////////////////////////////////////
    button : {
        font      : "sans-serif",
        isLoading : {
            spinnerBorder : customColours.hue
        },
        primary   : {
            default   : {
                bg           : customColours.hue,
                border       : customColours.hue,
                text         : defaultColours.white,
                borderRadius : "4px"
            },
            onHover   : {
                bg     : customColours.hue,
                border : customColours.hue,
                text   : defaultColours.white
            },
            isActive  : {
                bg     : customColours.hue,
                border : customColours.hue,
                text   : defaultColours.white
            },
            isLoading : {
                spinnerBorder : defaultColours.white
            }
        },
        secondary : {
            default   : {
                bg           : `${lighten(0.4, customColours.hue)}`,
                border       : customColours.hue,
                text         : customColours.hue,
                borderRadius : "4px"
            },
            onHover   : {
                bg     : `${lighten(0.4, customColours.hue)}`,
                border : customColours.hue,
                text   : customColours.hue
            },
            isActive  : {
                bg     : `${lighten(0.2, customColours.hue)}`,
                border : customColours.hue,
                text   : customColours.hue
            },
            isLoading : {
                spinnerBorder : customColours.hue
            }
        },
        tertiary  : {
            default   : {
                bg           : defaultColours.transparent,
                border       : customColours.hue,
                text         : customColours.hue,
                borderRadius : "4px"
            },
            onHover   : {
                bg     : `${lighten(0.40, customColours.hue)}`,
                border : defaultColours.transparent,
                text   : customColours.hue
            },
            isActive  : {
                bg     : `${lighten(0.32, customColours.hue)}`,
                border : defaultColours.transparent,
                text   : customColours.hue
            },
            isLoading : {
                spinnerBorder : customColours.hue
            }
        }
    },


    //  CARD  /////////////////////////////////////////////////////////////////
    card : {
        bg           : defaultColours.white,
        border       : `${lighten(0.96, defaultColours.black)}`,
        borderRadius : "4px"
    },


    //  RULE  /////////////////////////////////////////////////////////////////
    hr : {
        primary   : {
            bg     : defaultColours.blue80,
            height : "1px"
        },
        secondary : {
            bg     : defaultColours.slate40,
            height : "1px"
        },
        tertiary  : {
            bg     : defaultColours.slate20,
            height : "1px"
        }
    },


    //  INPUT  ////////////////////////////////////////////////////////////////
    input : {
        default    : {
            bg           : defaultColours.white,
            border       : defaultColours.slate40,
            label        : customColours.shade,
            text         : customColours.shade,
            borderRadius : "4px"
        },
        onFocus    : {
            bg       : defaultColours.white,
            border   : customColours.hue,
            text     : customColours.shade,
            helpText : customColours.shade
        },
        isValid    : {
            bg     : defaultColours.white,
            border : defaultColours.green80,
            label  : customColours.shade
        },
        isInvalid  : {
            bg       : defaultColours.red10,
            border   : defaultColours.red80,
            label    : defaultColours.red,
            helpText : defaultColours.red
        },
        isReadOnly : {
            bg     : defaultColours.grey50,
            border : defaultColours.grey50,
            label  : customColours.shade
        },
        required   : {
            text : defaultColours.red
        },
        icons      : {
            default : {
                fill : defaultColours.slate30
            },
            onFocus : {
                fill : customColours.hue
            },
            isValid : {
                bg     : defaultColours.grey50,
                border : defaultColours.red30
            }
        },

        select : {
            chevron : customColours.hue
        },

        radioButton : {
            inset  : {
                default    : {
                    bg : defaultColours.slate20
                },
                onHover    : {
                    bg : defaultColours.slate40
                },
                isSelected : {
                    bg : customColours.hue
                },
                isDisabled : {
                    bg : defaultColours.slate10
                }
            },
            circle : {
                default : {
                    bg : defaultColours.white
                }
            }
        },

        checkBox : {
            square : {
                default    : {
                    bg : defaultColours.slate20
                },
                onHover    : {
                    bg : defaultColours.slate40
                },
                isChecked  : {
                    bg : customColours.hue
                },
                isDisabled : {
                    bg : defaultColours.slate10
                }
            },
            check  : {
                default : {
                    border : defaultColours.white
                }
            }
        },

        toggleSwitch : {
            switch : {
                default   : {
                    bg : defaultColours.white
                },
                isChecked : {
                    bg : defaultColours.white
                }
            }
        }
    },


    //  INFO PANEL  ///////////////////////////////////////////////////////////
    infoPanel : {
        bg            : defaultColours.white,
        border        : defaultColours.slate20,
        dismissButton : {
            color : defaultColours.slate90
        }
    },


    //  NOTIFICATION  /////////////////////////////////////////////////////////
    notification : {
        default : {
            bg   : defaultColours.slate10,
            text : customColours.shade
        },
        kinds   : {
            info    : {
                border : defaultColours.blue60
            },
            warning : {
                border : defaultColours.amber
            },
            error   : {
                border : defaultColours.red90
            },
            success : {
                border : defaultColours.green90
            }
        }
    },


    //  PROGRESS BAR  /////////////////////////////////////////////////////////
    progressBar : {
        bg    : defaultColours.slate20,
        fill  : customColours.hue,
        label : customColours.shade,
        value : `${lighten(0.24, customColours.shade)}`
    },


    //  SIDEBAR  //////////////////////////////////////////////////////////////
    sidebar : {
        isCollapsed : {
            label : {
                text : defaultColours.white,
                bg   : customColours.hue
            }
        },

        header : {
            bg           : defaultColours.white,
            borderBottom : defaultColours.slate10,
            logoWidth    : "50%"
        },

        body : {
            bg : defaultColours.white
        },

        icons : {
            size    : "24px",
            stroked : {
                thickness : 2,
                default   : {
                    line : defaultColours.slate40
                },
                onHover   : {
                    line : defaultColours.slate80
                },
                isActive  : {
                    line : defaultColours.slate
                }
            },
            filled  : {
                default  : {
                    bg : defaultColours.slate40
                },
                onHover  : {
                    bg : defaultColours.slate80
                },
                isActive : {
                    bg : defaultColours.slate
                }
            }
        },

        links : {
            default    : {
                bg     : defaultColours.white,
                text   : customColours.shade,
                scale  : 100,
                weight : 600
            },
            onHover    : {
                bg   : defaultColours.slate10,
                text : customColours.hue
            },
            isSelected : {
                bg     : defaultColours.white,
                border : customColours.hue,
                text   : customColours.hue
            },
            hasAlert   : {
                bg : defaultColours.red70
            }
        },

        subLinks : {
            header  : {
                weight : 600
            },
            default : {
                bg     : defaultColours.white,
                text   : `${lighten(0.24, customColours.shade)}`,
                weight : 400,
                scale  : 92
            },
            onHover : {
                bg   : defaultColours.slate10,
                text : customColours.hue
            },
            chevron : {
                border : defaultColours.slate40
            }
        },

        footer : {
            bg        : defaultColours.white,
            borderTop : defaultColours.slate10
        }
    },


    //  TABLE  ////////////////////////////////////////////////////////////////
    table : {
        bg      : defaultColours.white,
        text    : customColours.shade,
        border  : defaultColours.slate40,
        striped : {
            header : {
                bg : defaultColours.blue40
            },
            cell   : {
                bg : defaultColours.slate20
            }
        },
        onHover : {
            bg   : defaultColours.amber20,
            text : customColours.shade
        }
    },

    tablePagination : {
        bg   : defaultColours.white,
        text : defaultColours.grey,
        svg  : {
            onHover : {
                stroke : defaultColours.slate60
            }
        }
    },


    //  TABS  ////////////////////////////////////////////////////////////////
    tabs : {
        label : {
            default    : {
                text : `${lighten(0.16, defaultColours.grey)}`
            },
            onHover    : {
                text : `${lighten(0.16, customColours.hue)}`
            },
            isActive   : {
                border : customColours.hue,
                text   : customColours.hue
            },
            isDisabled : {
                text : `${darken(0.24, defaultColours.slate)}`
            },
            hasAlert   : {
                circle : {
                    bg     : defaultColours.red90,
                    border : defaultColours.slate10
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
            color      : defaultColours.grey,
            weight     : 400,
            lineHeight : 1.64
        },

        headings : {
            font       : "sans-serif",
            color      : customColours.shade,
            weight     : 600,
            multiplier : 1.24,
            lineHeight : 1.24
        },

        links : {
            font    : "sans-serif",
            default : {
                color : defaultColours.blue90
            },
            onHover : {
                color : defaultColours.blue60
            }
        },

        selection : {
            bg   : customColours.hue,
            text : defaultColours.white
        },

        code : {
            inline : {
                bg    : defaultColours.blue10,
                text  : defaultColours.blue90,
                scale : 80
            },
            block  : {
                bg         : `${lighten(0.02, defaultColours.slate10)}`,
                text       : defaultColours.blue70,
                scale      : 80,
                lineHeight : 1.8
            },
            prism  : {
                tokens : {
                    tag         : defaultColours.violet,
                    atrule      : defaultColours.teal90,
                    attrName    : defaultColours.orange,
                    attrValue   : defaultColours.green80,
                    boolean     : defaultColours.green80,
                    cdata       : defaultColours.grey70,
                    className   : defaultColours.red,
                    comment     : defaultColours.grey70,
                    constant    : defaultColours.green80,
                    deleted     : defaultColours.slate80,
                    delimiter   : defaultColours.grey90,
                    doctype     : defaultColours.grey90,
                    entity      : defaultColours.green80,
                    function    : defaultColours.orange,
                    hexcode     : defaultColours.green,
                    inserted    : defaultColours.green80,
                    italic      : defaultColours.green80,
                    keyword     : defaultColours.orange90,
                    namespace   : defaultColours.green80,
                    number      : defaultColours.green80,
                    operator    : defaultColours.pistachio,
                    plain       : defaultColours.grey,
                    prolog      : defaultColours.grey90,
                    property    : defaultColours.red90,
                    punctuation : defaultColours.grey60,
                    regex       : defaultColours.green80,
                    selector    : defaultColours.violet,
                    string      : defaultColours.crimson60,
                    symbol      : defaultColours.green80,
                    url         : defaultColours.green80,
                    variable    : defaultColours.orange80
                },

                languages : {
                    css  : {
                        fallback : defaultColours.orange90
                    },
                    html : {
                        fallback : defaultColours.grey
                    },
                    js   : {
                        fallback : defaultColours.violet90
                    },
                    json : {
                        fallback : defaultColours.teal,
                        tokens   : {
                            string : defaultColours.teal
                        }
                    }
                }
            }
        },

        kbd : {
            text : defaultColours.grey,
            bg   : defaultColours.grey10
        }
    }
};
