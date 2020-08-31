export class Sparks {
    constructor(config) {
        // super(config.scene);
        this.scene = config.scene;
        if (config.x) {
            this.x = config.x;
        }
        if (config.y) {
            this.y = config.y;
        }
        this.size=1;
        if (config.size)
        {
            this.size=config.size;
        }
        //
        //
        //
        this.color = 0xffffff;
        if (config.color) {
            this.color = config.color;
        }
        this.n = 25;
        if (config.count) {
            this.n = config.count;
        }
     
        for (var i = 0; i < this.n; i++) {
            var s = this.getSpark();
            s.x = this.x;
            s.y = this.y;
            //   this.add(s);
            var angle = i * (360 / this.n);
            var r = Phaser.Math.Between(50, 100);
            var tx = this.x + r * Math.cos(angle);
            var ty = this.y + r * Math.sin(angle);
            this.scene.tweens.add({
                targets: s,
                duration: 1000,
                alpha: 0,
                y: ty,
                x: tx,
                onComplete: this.tweenDone,
                onCompleteParams: [{
                    scope: this
                }]
            });
        }
    }
    tweenDone(tween, targets, custom) {
        targets[0].destroy();
    }
    getSpark() {
        var s = this.scene.add.graphics();
        s.fillStyle(this.color, 1);
        s.fillCircle(0, 0, this.size);
        return s;
    }
}