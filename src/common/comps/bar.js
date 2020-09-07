/* eslint-disable */
export class Bar extends Phaser.GameObjects.Container {
    constructor(config) {
        if (!config.scene) {
            console.log("missing scene!");
            return;
        }
        super(config.scene);
        this.scene = config.scene;
        if (!config.color) {
            config.color = 0xff0000;
        }
        if (!config.width) {
            config.width = 200;
        }
        if (!config.height) {
            config.height = config.width / 4;
        }
        this.graphics = this.scene.add.graphics();
        this.graphics.fillStyle(config.color, 1);
        this.graphics.fillRect(0, 0, config.width, config.height);
        this.add(this.graphics);
        this.graphics.x = -config.width / 2;
        this.graphics.y = -config.height / 2;
        if (config.x) {
            this.x = config.x;
        }
        if (config.y) {
            this.y = config.y;
        }
        this.scene.add.existing(this);
    }
    setPercent(per) {
        this.graphics.scaleX = per;
    }
    setTweenPer(per) {
        this.timeTween = this.scene.tweens.add({
            targets: this.graphics,
            duration: 980,
            scaleX: per
        });
    }
}