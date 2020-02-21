import { lighten } from "polished";

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
        font: {
            sans  : "sans-serif",
            serif : "serif",
            mono  : "monospace",
        },

        size: {
            default    : 1,
            multiplier : 1.16,
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
            default: {
                text : baseColors.blue90,
            },
            onHover: {
                text : baseColors.blue60
            }
        },

        selection: {
            bg   : mainColors.hue,
            text : baseColors.white
        },

        code: {
            inline: {
                bg    : baseColors.slate10,
                text  : baseColors.blue70,
                scale : 80
            },
            block: {
                bg         : `${lighten(0.02, baseColors.slate10)}`,
                text       : baseColors.blue70,
                scale      : 80,
                lineHeight : 1.8
            },
            prism: {
                tokens: {
                    cdata       : baseColors.grey70,
                    prolog      : baseColors.grey90,
                    doctype     : baseColors.grey90,
                    delimiter   : baseColors.grey90,
                    comment     : baseColors.grey70,
                    hexcode     : baseColors.green,
                    string      : baseColors.crimson60,
                    operator    : baseColors.pistachio,
                    variable    : baseColors.orange80,
                    atrule      : baseColors.teal90,
                    keyword     : baseColors.orange90,
                    tag         : baseColors.violet,
                    attrName    : baseColors.red90,
                    attrValue   : baseColors.orange80,
                    function    : baseColors.orange,
                    className   : baseColors.blue90,
                    selector    : baseColors.violet,
                    property    : baseColors.red90,
                    punctuation : baseColors.grey60,
                    deleted     : baseColors.orange80,
                    boolean     : baseColors.green80,
                    constant    : baseColors.green80,
                    entity      : baseColors.green80,
                    inserted    : baseColors.green80,
                    number      : baseColors.green80,
                    regex       : baseColors.green80,
                    symbol      : baseColors.green80,
                    url         : baseColors.green80,
                    namespace   : baseColors.green80,
                    italic      : baseColors.green80,
                    plain       : baseColors.grey,
                },

                languages: {
                    css: {
                        fallback : baseColors.orange90
                    },
                    html: {
                        fallback : baseColors.grey
                    },
                    js: {
                        fallback : baseColors.violet90
                    },
                    json: {
                        fallback : baseColors.teal,
                        tokens   : {
                            string : baseColors.teal
                        }
                    }
                }
            }
        },

        kbd: {
            text : baseColors.grey,
            bg   : baseColors.grey10
        }
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
        primary: {
            default: {
                bg     : mainColors.hue,
                border : mainColors.hue,
                text   : baseColors.black,
            },
            onHover: {
                bg     : mainColors.hue,
                border : mainColors.hue,
                text   : baseColors.black,
            },
            isActive: {
                bg     : mainColors.hue,
                border : mainColors.hue,
                text   : baseColors.black,
            },
            isLoading: {
                bg            : mainColors.hue,
                spinnerBorder : baseColors.black
            }
        },
        secondary: {
            default: {
                bg     : `${lighten(0.32, mainColors.hue)}`,
                border : mainColors.hue,
                text   : baseColors.black,
            },
            onHover: {
                bg     : `${lighten(0.32, mainColors.hue)}`,
                border : mainColors.hue,
                text   : baseColors.black,
            },
            isActive: {
                bg     : `${lighten(0.2, mainColors.hue)}`,
                border : mainColors.hue,
                text   : baseColors.black,
            },
            isLoading: {
                bg            : baseColors.white,
                spinnerBorder : baseColors.black,
            }
        }
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
            helpText : mainColors.shade,
        },
        isValid: {
            bg     : baseColors.white,
            border : baseColors.green80,
            label  : mainColors.shade
        },
        isInvalid: {
            bg       : baseColors.red10,
            border   : baseColors.red80,
            label    : baseColors.red,
            helpText : baseColors.red,
        },
        isReadOnly: {
            bg     : baseColors.grey50,
            border : baseColors.grey50,
            label  : mainColors.shade
        },
        required: {
            text : baseColors.red
        },
        icons: {
            default: {
                fill : baseColors.slate30,
            },
            onFocus: {
                fill : mainColors.hue,
            },
            isValid: {
                bg     : baseColors.grey50,
                border : baseColors.red30,
            }
        },
        select: {
            chevron : mainColors.hue
        },
        radioButton: {
            default: {

            }
        }
    },

    //  SIDEBAR  //////////////////////////////////////////////////////////////
    sidebar: {
        header    : baseColors.white,
        body      : baseColors.white,
        separator : baseColors.slate20,

        links: {
            default: {
                bg     : baseColors.white,
                text   : mainColors.shade,
                scale  : 100,
                weight : 600,
            },
            onHover: {
                bg   : baseColors.slate10,
                text : mainColors.hue,
            },
            isSelected: {
                bg   : mainColors.hue,
                text : baseColors.white,
            },
            hasAlert: {
                bg : baseColors.red70
            },

            group: {
                default: {
                    bg     : baseColors.slate20,
                    text   : mainColors.shade,
                    weight : 400,
                },
                onHover: {
                    bg   : baseColors.slate10,
                    text : mainColors.hue
                },
                chevron: {
                    border : baseColors.slate40
                }
            }
        },

        icons: {
            default: {
                stroked: {
                    line      : baseColors.slate40,
                    thickness : 2
                },
                fill: {
                    bg : baseColors.slate40
                }
            },
            onHover: {
                stroked: {
                    line      : baseColors.slate80,
                    thickness : 2
                },
                fill: {
                    bg : baseColors.slate40
                }
            },
            isActive: {
                stroked: {
                    line      : baseColors.slate,
                    thickness : 2
                },
                fill: {
                    bg : baseColors.slate40
                }
            }
        },

        isCollapsed: {
            label: {
                text : mainColors.shade,
                bg   : mainColors.hue
            }
        },

        bottomSection: {
            border : baseColors.slate10
        }
    },

    //  TABLE  ////////////////////////////////////////////////////////////////
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
