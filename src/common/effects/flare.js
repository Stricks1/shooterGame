import {
    Align
} from "../util/align";
export class Flare extends Phaser.GameObjects.Sprite {
    constructor(config) {
        if (!config.x) {
            config.x = 0;
        }
        if (!config.y) {
            config.y = 0;
        }
        super(config.scene, config.x, config.y, "flare");
        let scale = .2;
        let direction = -1;
        let duration = 1000;
        if (config.scale) {
            scale = config.scale;
        }
        if (config.direction) {
            direction = config.direction;
        }
        if (config.duration) {
            duration = config.duration;
        }
        this.tint = 0xffffff;
        if (config.tint) {
            this.tint = config.tint;
        }
        this.setTint(this.tint);
        let finalAngle = 270 * direction;
        Align.scaleToGameW(this, scale, this.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        this.scene.tweens.add({
            targets: this,
            duration: duration,
            alpha: 0,
            angle: finalAngle,
            onComplete: this.tweenDone,
            onCompleteParams: [{
                scope: this
            }]
        });
    }
    tweenDone(tween, targets, custom) {
        custom.scope.destroy();
    }
    static preload(scene, path) {
        scene.load.image('flare', path);
    }
}