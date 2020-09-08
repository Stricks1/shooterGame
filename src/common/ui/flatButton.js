/* eslint-disable */
import {
    BaseUI
} from "./baseUi.js"
import {
    TextObj
} from "../ui/textObj";
import {
    Align
} from "../util/align";
export class FlatButton extends BaseUI {
    constructor(config) {
        super({
            scene: config.scene
        });
        this.config = config;
        this.scene = config.scene;
        this.setBack(config.key, config.scale);
        this.setAlignGrid(3, 3);
        this.text1 = this.placeText(config.text, 4, config.textStyle);
        if (config.x) {
            this.x = config.x;
        }
        if (config.y) {
            this.y = config.y;
        }
        if (config.callback) {
            this.callback = config.callback;
            this.back.setInteractive();
            this.back.on('pointerup', this.pressed, this)
        }
        this.setSize(this.back.displayWidth, this.back.displayHeight)
    }
    centerV() {
        this.text1.y = this.back.y + this.back.displayHeight / 2 - this.text1.displayHeight / 2;
    }
    sceneChanged() {
        this.back.off('pointerup', this.pressed, this);
        this.back.off("pointerover", this.over, this);
        this.back.off("pointerout", this.out, this);
    }
    over() {
        this.y -= 5;
    }
    out() {
        this.y += 5;
    }
    pressed() {
        this.callback(this);
    }
}