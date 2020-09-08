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
import {
    Model
}
from "../mc/model";
import {
    TextStyles
} from "../ui/textStyles";
import {
    EventDispatcher
} from "../mc/eventDispatcher";
export class IconTextButton extends BaseUI {
    constructor(config) {
        super({scene:config.scene});
        this.scene = config.scene;
        this.setBack(config.backKey, config.scale);
        this.setAlignGrid(3, 3);
        
        this.model = Model.getInstance();
        this.emitter = EventDispatcher.getInstance();
        if (!config.text) {
            config.text = "-";
        }
        if (!config.textStyle) {
            config.textStyle = 'DEFAULT';
        }
        if (!config.textPos)
        {
            config.textPos=4;
        }
        this.text1 = this.placeText(config.text, config.textPos, config.textStyle);
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
        if (!config.iconPos)
        {
            config.iconPos=4;
        }
        this.icon = this.placeImage(config.icon, config.iconPos, config.iconScale);
        if (config.iconColor) {
            var iconColor = config.iconColor;
        } else {
            var iconColor = 0xffffff;
        }
        this.back.setInteractive();
        this.back.on('pointerdown', this.pressed, this);
        this.back.on('pointerup', this.up, this);
        if (config.x) {
            this.x = config.x;
        }
        if (config.y) {
            this.y = config.y;
        }
        this.setSize(this.back.displayWidth, this.back.displayHeight);
        this.emitter.on('SCENE_CHANGED', this.sceneChanged, this);
        this.icon.setTintFill(iconColor);
    }
    sceneChanged() {
        this.removeListeners();
        this.emitter.off('SCENE_CHANGED', this.sceneChanged, this);
        this.destroy();
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
        if (this.model.clickLock == true) {
            return;
        }
        if (this.oy == null) {
            this.init();
        }
        this.y = this.oy;
        if (this.event) {
            if (this.params) {
                this.emitter.emit(this.event, this.params);
            } else {
                this.emitter.emit(this.event);
            }
        }
    }
    pressed() {
        if (this.oy == null) {
            this.init();
        }
        this.y = this.oy + this.scene.sys.game.config.height * .01;
    }
}