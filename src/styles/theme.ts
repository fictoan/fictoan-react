///////////////////////////////////////////////////////////////////////////////
// ADDING NEW THEME OBJECTS
// - Use consistent keywords like `bg`, `color` etc. (We use the US spelling
//      here because of the property name).
// - If the element has states, nest each individual state in its own object:
//      `default`, `onHover`, `isActive` etc
///////////////////////////////////////////////////////////////////////////////

import lighten from "polished/lib/color/lighten";
import darken from "polished/lib/color/darken";

import { defaultColours } from "./DefaultColours";

type CustomColoursType = { [k in string]: string };

// CUSTOM COLOURS  ////////////////////////////////////////////////////////////
export const customColours = {
    hue      : defaultColours.blue90,
    tint     : defaultColours.amber,
    shade    : defaultColours.grey,
    analogue : defaultColours.indigo50,
    accent   : defaultColours.green80
} as const;

// GLOBALS  ///////////////////////////////////////////////////////////////////
export const globalVariables = {
    borderWidth  : "1px",
    borderRadius : "4px",
    measurements : {
        nano   : "8px",
        micro  : "24px",
        tiny   : "2vmax",
        small  : "4vmax",
        medium : "8vmax",
        large  : "16vmax",
        huge   : "24vmax",
    }
}

export const FictoanTheme = {
    customColours : customColours as CustomColoursType,


    // BASICS /////////////////////////////////////////////////////////////////
    body : {
        bg : String(defaultColours.white)
    },


    // BOTTOM DRAWER  /////////////////////////////////////////////////////////
    bottomDrawer : {
        bg            : String(defaultColours.white),
        border        : String(defaultColours.slate20),
        borderRadius  : String(globalVariables.measurements.micro),
        overlay       : {
            bg      : String(defaultColours.black),
            opacity : 0.4,
            blur    : "4px"
        },
        dismissButton : {
            color : String(defaultColours.slate90)
        }
    },


    // BREADCRUMBS ////////////////////////////////////////////////////////////
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


    // BUTTON /////////////////////////////////////////////////////////////////
    button : {
        font      : "sans-serif",
        isLoading : {
            spinnerBorder : String(customColours.hue)
        },
        primary   : {
            default    : {
                bg           : String(customColours.hue),
                border       : String(customColours.hue),
                text         : String(defaultColours.white),
                borderRadius : String(globalVariables.borderRadius)
            },
            onHover    : {
                bg     : String(customColours.hue),
                border : String(customColours.hue),
                text   : String(defaultColours.white)
            },
            isActive   : {
                bg     : String(customColours.hue),
                border : String(customColours.hue),
                text   : String(defaultColours.white)
            },
            isDisabled : {
                bg     : String(customColours.hue),
                border : String(customColours.hue),
                text   : String(defaultColours.white)
            },
            isLoading  : {
                spinnerBorder : String(defaultColours.white)
            }
        },
        secondary : {
            default    : {
                bg           : String(`${lighten(0.4, String(customColours.hue))}`),
                border       : String(customColours.hue),
                text         : String(customColours.hue),
                borderRadius : String(globalVariables.borderRadius)
            },
            onHover    : {
                bg     : String(`${lighten(0.4, String(customColours.hue))}`),
                border : String(customColours.hue),
                text   : String(customColours.hue)
            },
            isActive   : {
                bg     : String(`${lighten(0.2, String(customColours.hue))}`),
                border : String(customColours.hue),
                text   : String(customColours.hue)
            },
            isLoading  : {
                spinnerBorder : String(customColours.hue)
            },
            isDisabled : {
                bg     : String(`${lighten(0.4, String(customColours.hue))}`),
                border : String(customColours.hue),
                text   : String(customColours.hue)
            }
        },
        tertiary  : {
            default    : {
                bg           : String(defaultColours.transparent),
                border       : String(customColours.hue),
                text         : String(customColours.hue),
                borderRadius : String(globalVariables.borderRadius)
            },
            onHover    : {
                bg     : String(`${lighten(0.40, String(customColours.hue))}`),
                border : String(defaultColours.transparent),
                text   : String(customColours.hue)
            },
            isActive   : {
                bg     : String(`${lighten(0.32, String(customColours.hue))}`),
                border : String(defaultColours.transparent),
                text   : String(customColours.hue)
            },
            isLoading  : {
                spinnerBorder : String(customColours.hue)
            },
            isDisabled : {
                bg     : String(defaultColours.transparent),
                border : String(customColours.hue),
                text   : String(customColours.hue)
            }
        }
    },


    // CARD ///////////////////////////////////////////////////////////////////
    card : {
        bg           : String(defaultColours.white),
        border       : String(`${lighten(0.96, String(defaultColours.black))}`),
        borderRadius : String(globalVariables.borderRadius)
    },


    // CHECKBOX ///////////////////////////////////////////////////////////////
    checkBox : {
        square : {
            default    : {
                bg           : String(defaultColours.slate20),
                borderRadius : String(globalVariables.borderRadius)
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

    // RULE ///////////////////////////////////////////////////////////////////
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

    // INPUT //////////////////////////////////////////////////////////////////
    inputField : {
        default    : {
            bg           : String(defaultColours.white),
            border       : String(defaultColours.slate40),
            label        : String(customColours.shade),
            text         : String(customColours.shade),
            borderRadius : String(globalVariables.borderRadius),
            helpText     : {
                text  : String(defaultColours.slate60),
                scale : "92%"
            }
        },
        onFocus    : {
            bg     : String(defaultColours.white),
            border : String(customColours.hue),
            text   : String(customColours.shade)
        },
        isValid    : {
            bg     : String(defaultColours.white),
            border : String(defaultColours.green80),
            label  : String(customColours.shade)
        },
        isInvalid  : {
            bg        : String(defaultColours.red10),
            border    : String(defaultColours.red80),
            text      : String(defaultColours.red),
            label     : String(defaultColours.red),
            errorText : String(defaultColours.red)
        },
        isDisabled : {
            bg     : String(defaultColours.slate20),
            border : String(defaultColours.slate40),
            text   : String(defaultColours.slate80),
            label  : String(defaultColours.slate80)
        },
        isReadOnly : {
            bg     : String(defaultColours.slate10),
            border : String(defaultColours.slate20),
            text   : String(defaultColours.slate80),
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


    // INFO-PANEL  ////////////////////////////////////////////////////////////
    infoPanel : {
        bg            : String(defaultColours.white),
        border        : String(defaultColours.slate20),
        dismissButton : {
            color        : String(defaultColours.slate90),
            borderRadius : String(globalVariables.borderRadius)
        }
    },


    // NOTIFICATION ///////////////////////////////////////////////////////////
    notification : {
        generic : {
            bg           : String(defaultColours.white),
            text         : String(customColours.shade),
            borderRadius : String(globalVariables.borderRadius)
        },
        kinds   : {
            info    : {
                bg     : String(`${lighten(0.32, String(defaultColours.blue60))}`),
                border : String(defaultColours.blue60)
            },
            warning : {
                bg     : String(`${lighten(0.32, String(defaultColours.amber))}`),
                border : String(defaultColours.amber)
            },
            error   : {
                bg     : String(`${lighten(0.32, String(defaultColours.red90))}`),
                border : String(defaultColours.red90)
            },
            success : {
                bg     : String(`${lighten(0.32, String(defaultColours.green90))}`),
                border : String(defaultColours.green90)
            }
        }
    },


    // PROGRESSBAR  ///////////////////////////////////////////////////////////
    progressBar : {
        bg           : String(defaultColours.slate20),
        fill         : String(customColours.hue),
        label        : String(customColours.shade),
        value        : String(customColours.shade),
        borderRadius : String(globalVariables.borderRadius)
    },


    // RADIO BUTTON ///////////////////////////////////////////////////////////
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


    // DROPDOWN ///////////////////////////////////////////////////////////////
    select : {
        chevron : String(customColours.hue)
    },


    // SIDEBAR ////////////////////////////////////////////////////////////////
    sidebar : {
        width : String("240px"),
        bg    : String(defaultColours.white),

        isCollapsed : {
            width : "48px",
            label : {
                text         : String(defaultColours.white),
                bg           : String(customColours.hue),
                borderRadius : String(globalVariables.borderRadius)
            }
        },

        header : {
            bg           : String(defaultColours.white),
            borderBottom : String(defaultColours.slate10),
            logoWidth    : "50%",
            iconWidth    : "40px"
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
                text   : String(`${lighten(0.24, String(customColours.shade))}`),
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


    // SPINNER ////////////////////////////////////////////////////////////////
    spinner : {
        color : String(defaultColours.teal)
    },


    // TABLE //////////////////////////////////////////////////////////////////
    table : {
        bg         : String(defaultColours.white),
        text       : String(customColours.shade),
        border     : String(defaultColours.slate40),
        striped    : {
            header : {
                bg : String(defaultColours.blue40)
            },
            cell   : {
                bg : String(defaultColours.slate20)
            }
        },
        onHover    : {
            bg   : String(defaultColours.amber20),
            text : String(customColours.shade)
        },
        pagination : {
            bg           : String(defaultColours.white),
            text         : String(defaultColours.grey),
            borderRadius : String(globalVariables.borderRadius),
            navIcon      : {
                onHover : {
                    stroke : String(defaultColours.slate60)
                }
            }
        }
    },


    // TABS ///////////////////////////////////////////////////////////////////
    tabs : {
        label : {
            default    : {
                text : String(`${lighten(0.16, String(defaultColours.grey))}`)
            },
            onHover    : {
                text : String(`${lighten(0.16, String(customColours.hue))}`)
            },
            isActive   : {
                border : String(customColours.hue),
                text   : String(customColours.hue)
            },
            isDisabled : {
                text : String(`${darken(0.24, String(defaultColours.slate))}`)
            },
            hasAlert   : {
                circle : {
                    bg     : String(defaultColours.red90),
                    border : String(defaultColours.slate10)
                }
            }
        }
    },


    // TEXT ///////////////////////////////////////////////////////////////////
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
            lineHeight : 1.64,
            subtext    : String(defaultColours.slate80)
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
                bg           : String(`${lighten(0.02, String(defaultColours.slate10))}`),
                text         : String(defaultColours.blue70),
                scale        : 80,
                lineHeight   : 1.8,
                borderRadius : String(globalVariables.borderRadius)
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
            bg           : String(defaultColours.grey10),
            text         : String(defaultColours.grey),
            borderRadius : String(globalVariables.borderRadius)
        }
    },


    // TOAST //////////////////////////////////////////////////////////////////
    toast : {
        bg   : String(defaultColours.slate10),
        text : String(defaultColours.black)
    },


    // SWITCH /////////////////////////////////////////////////////////////////
    toggleSwitch : {
        case     : {
            default    : {
                bg : String(defaultColours.slate30)
            },
            onHover    : {
                bg : String(defaultColours.green40)
            },
            isChecked  : {
                bg : String(defaultColours.green90)
            },
            isDisabled : {
                bg : String(defaultColours.grey)
            }
        },
        actuator : {
            default    : {
                bg : String(defaultColours.white)
            },
            onHover    : {
                bg : String(defaultColours.white)
            },
            isChecked  : {
                bg : String(defaultColours.white)
            },
            isDisabled : {
                bg : String(defaultColours.grey70)
            }
        }
    },
};
