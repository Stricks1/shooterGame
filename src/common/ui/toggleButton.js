/* eslint-disable */
import {
    Align
} from "../util/align";
import {
    EventDispatcher
} from "../mc/eventDispatcher";
export class ToggleButton extends Phaser.GameObjects.Container {
    constructor(config) {
        if (!config.scene) {
            console.log("missing scene!");
            return;
        }
        super(config.scene);
        this.scene = config.scene;
        this.emitter = EventDispatcher.getInstance();
        let scale = .1;
        if (config.scale) {
            scale = config.scale;
        }
        this.back = this.scene.add.image(0, 0, config.backKey);
        this.onIcon = this.scene.add.image(0, 0, config.onIcon);
        this.offIcon = this.scene.add.image(0, 0, config.offIcon);
        Align.scaleToGameW(this.back, scale, this.scene);
        Align.scaleToGameW(this.onIcon, scale / 2, this.scene);
        Align.scaleToGameW(this.offIcon, scale / 2, this.scene);
        this.add(this.back);
        this.add(this.onIcon);
        this.add(this.offIcon);
        if (config.value != false) {
            config.value = true;
        }
        this.value = config.value;
        if (config.event) {
            this.event = config.event;
        }
        if (config.callback) {
            this.callback = callback;
        }
        this.setIcons();
        this.back.setInteractive();
        this.back.on('pointerdown', this.toggle, this);
        this.back.setScrollFactor(0);
        if (config.x) {
            this.x = config.x;
        }
        if (config.y) {
            this.y = config.y;
        }
        this.setSize(this.back.displayWidth, this.back.displayHeight);
        this.scene.add.existing(this);
    }
    toggle() {
        this.value = !this.value;
        this.setIcons();
        if (this.event) {
            this.emitter.emit(this.event, this.value);
        }
        if (this.callback)
        {
            this.callback(this.value);
        }
    }
    setIcons() {
        if (this.value == true) {
            this.onIcon.visible = true;
            this.offIcon.visible = false;
        } else {
            this.onIcon.visible = false;
            this.offIcon.visible = true;
        }
    }
}