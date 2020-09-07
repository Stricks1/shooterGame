/* eslint-disable */
import {
    BaseUI
} from "./baseUi.js"
import {
    Align
} from "../util/align";
import {
    EventDispatcher
} from "../mc/eventDispatcher";
export class IconButton extends BaseUI {
    constructor(config) {
        super({
            scene: config.scene
        });
        this.scene = config.scene;
        this.config = config;
        this.emitter = EventDispatcher.getInstance();
        this.setBack(config.backKey, config.scale);
        this.setAlignGrid(3, 3);
        this.oy = null;
        if (!config.scale) {
            config.scale = .1;
        }
        if (config.useBack == false) {
            this.back.alpha = .01;
        }
        if (!config.iconScale) {
            config.iconScale = config.scale / 2;
        }
        if (config.event) {
            this.event = config.event;
        }
        if (config.params) {
            this.params = config.params;
        }
        this.icon = this.placeImage(config.icon, 4, config.iconScale);
        if (config.iconColor) {
            var iconColor = config.iconColor;
        } else {
            var iconColor = 0xffffff;
        }
        this.back.setInteractive();
        this.back.on('pointerdown', this.pressed, this);
        this.back.on('pointerover', this.over, this);
        this.back.on('pointerout', this.out, this);
        this.back.on('pointerup', this.up, this);
        if (config.x) {
            this.x = config.x;
        }
        if (config.y) {
            this.y = config.y;
        }
        this.setSize(this.back.displayWidth, this.back.displayHeight);
        this.icon.setTintFill(iconColor);
    }
    removeListeners() {
        this.back.off('pointerdown', this.pressed, this);
        this.back.off('pointerover', this.over, this);
        this.back.off('pointerout', this.out, this);
        this.back.off('pointerup', this.up, this);
    }
    init() {
        this.oy = this.y;
    }
    over() {
        if (this.oy == null) {
            this.init();
        }
        this.y = this.oy - this.scene.sys.game.config.height * .01;
    }
    out() {
        if (this.oy == null) {
            this.init();
        }
        this.y = this.oy;
    }
    up() {
        if (this.oy == null) {
            this.init();
        }
        this.y = this.oy - this.scene.sys.game.config.height * .01;
    }
    pressed() {
        if (this.oy == null) {
            this.init();
        }
        this.y = this.oy + this.scene.sys.game.config.height * .01;
        if (this.event) {
            if (this.params) {
                this.emitter.emit(this.event, this.params);
            } else {
                this.emitter.emit(this.event);
            }
        }
    }
}