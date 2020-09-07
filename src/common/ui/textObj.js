/* eslint-disable */
import {
    EventDispatcher
} from "../../common/mc/eventDispatcher";
export class TextObj extends Phaser.GameObjects.Text {
    constructor(config) {
        super(config.scene, 0, 0, config.text);
        this.config = config;
        this.setOrigin(0.5, 0.5);
        if (config.x) {
            this.x = config.x;
        }
        if (config.y) {
            this.y = config.y;
        }
        if (config.scale) {
            Align.scaleToGameW(this, config.scale);
        }
        if (!config.textStyle) {
            config.textStyle = {
                fontSize: "16px",
                color: "#ff0000"
            };
        }
        if (config.textStyle) {
            if (config.textStyle.style) {
                this.setStyle(config.textStyle.style);
            }
            if (config.textStyle.stroke) {
                if (config.textStyle.strokeThick) {
                    this.setStroke(config.textStyle.stroke, config.textStyle.strokeThick);
                } else {
                    this.setStroke(config.textStyle.stroke, 4);
                }
            }
            if (config.textStyle.shadow) {
                this.setShadow(4, 4, config.shadow, 2, false, true);
            }
        }
        if (config.event) {
            this.setInteractive();
            this.on('pointerdown', this.onDown, this);
        }
        this.scene.add.existing(this);
    }
    onDown() {
        let emitter = EventDispatcher.getInstance();
        emitter.emit(this.config.event, this.config);
    }
    sceneChanged() {
        this.destroy();
    }
}