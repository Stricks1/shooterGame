/* eslint-disable */
let instance = null;
export class TextStyles {
    constructor(width) {
        if (instance == null) {
            instance = this;
        }
        this.setConstants(width);
    }
    static getInstance(width) {
        if (instance == null) {
            instance = new TextStyles(width);
        }
        window.textStyles=instance;
        return instance;
    }
    setConstants(width) {
        this.width = width;
        TextStyles.SIZE_VERY_LARGE = width / 5;
        TextStyles.SIZE_LARGE = width / 10;
        TextStyles.SIZE_MED3 = width / 15;
        TextStyles.SIZE_MED = width / 20;
        TextStyles.SIZE_MED2 = width / 25;
        TextStyles.SIZE_SMALL = width / 30;
        TextStyles.SIZE_SMALL2 = width / 40;
        TextStyles.MAIN_FONT="Impact";

        this.styles = [];
        this.styles[TextStyles.DEFAULT] = {
            style: {
                color: '#ffffff',
                fontSize: TextStyles.SIZE_MED,
            }
        }
        this.setDefaults();
    }
    getSize(size) {
        return this.width/ size;
    }
    getStyle(style) {
        if (!this.styles.hasOwnProperty(style)) {
            style = TextStyles.DEFAULT;
        }
        var styleConfig = this.styles[style];
        return styleConfig;
    }
    addStyle(key, style) {
        this.styles[key] = style;
    }
    regSimple(key, color, fontSize=TextStyles.SIZE_MED, font = TextStyles.MAIN_FONT) {

        let obj = {
            style: {
                color: color,
                fontSize: fontSize,
                fontFamily: font
            }
        };
        this.styles[key] = obj;
    }
    regAdvanced(key, color, fontSize = TextStyles.SIZE_MED, font = TextStyles.MAIN_FONT, stroke = "#ff0000", strokeThick = 4, shadow = "#000000") {
        this.styles[key] = {
            stroke: stroke,
            strokeThick: strokeThick,
            style: {
                color: color,
                fontSize: fontSize,
                fontFamily: font
            }
        }
    }
    setDefaults() {
        this.styles['DEFAULT'] = {
            style: {
                color: '#ffffff',
                fontSize: TextStyles.SIZE_MED,
                font: TextStyles.MAIN_FONT
            }
        }
        this.styles['PURPLE'] = {
            stroke: '#1D1F9C',
            strokeThick: 4,
            style: {
                color: '#1D1F9C',
                fontSize: TextStyles.SIZE_MED,
                fontFamily: TextStyles.MAIN_FONT
            }
        }
        this.styles['TOAST_BAR'] = {
            shadow: '#000000',
            stroke: '#ff0000',
            strokeThick: 4,
            style: {
                color: '#ffffff',
                fontSize: TextStyles.SIZE_MED,
                fontFamily: TextStyles.MAIN_FONT
            }
        }
        this.styles['CLOCK'] = {
            style: {
                color: '#ffffff',
                fontSize: TextStyles.SIZE_MED,
                fontFamily: TextStyles.MAIN_FONT
            }
        }
        this.styles['CLOCK2'] = {
            style: {
                color: '#000000',
                fontSize: TextStyles.SIZE_MED2,
                fontFamily: TextStyles.MAIN_FONT
            }
        }
        this.styles['TITLE_TEXT'] = {
            style: {
                fontFamily: TextStyles.MAIN_FONT,
                fontSize: TextStyles.SIZE_MED3,
                color: "red"
            },
            shadow: "#000000",
            strokeThickness: 2
        };
        this.styles['POINT_BOX'] = {
            style: {
                fontFamily: TextStyles.MAIN_FONT,
                fontSize: TextStyles.SIZE_LARGE,
                color: "red"
            },
            shadow: "#000000",
            stroke: "#ff0000",
            strokeThickness: 4
        };
        this.styles['SCORE'] = {
            style: {
                fontFamily: TextStyles.MAIN_FONT,
                fontSize: TextStyles.SIZE_MED,
                color: "#ffffff"
            }
        };
        this.styles['BLACK'] = {
            style: {
                fontFamily: TextStyles.MAIN_FONT,
                fontSize: TextStyles.SIZE_SMALL2,
                color: "#000000"
            }
        };
        this.styles['RED'] = {
            style: {
                fontFamily: TextStyles.MAIN_FONT,
                fontSize: TextStyles.SIZE_SMALL2,
                color: "#FF0000"
            }
        };
        this.styles['BLACK2'] = {
            style: {
                fontFamily: TextStyles.MAIN_FONT,
                fontSize: TextStyles.SIZE_SMALL,
                color: "#000000"
            }
        };
        this.styles['POINTS'] = {
            style: {
                fontFamily: TextStyles.MAIN_FONT,
                fontSize: TextStyles.SIZE_VERY_LARGE,
                color: "#ff0000"
            }
        };
        this.styles['WHITE'] = {
            style: {
                fontFamily: TextStyles.MAIN_FONT,
                fontSize: TextStyles.SIZE_MED,
                color: "#ffffff"
            }
        };
        this.styles['BUTTON_STYLE'] = {
            style: {
                fontFamily: TextStyles.MAIN_FONT,
                fontSize: TextStyles.SIZE_MED2,
                color: "#ffffff",
            },
            shadow: "#000000"
        };
    }
}