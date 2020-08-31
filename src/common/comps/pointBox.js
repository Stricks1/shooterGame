import {
    TextStyles
} from "../ui/textStyles";
import {
    TextObj
} from "../ui/textObj";
import {
    UIBlock
} from "../ui/uiblock";
import {
    Align
}
from "../util/align";
import {
    BaseUI
} from "../ui/baseUi";
export class PointBox extends BaseUI {
    constructor(config) {
        super(config);
        this.scene = config.scene;
        if (config.key) {
            let back = this.scene.add.image(0, 0, config.key);
            this.add(back);
            if (config.scale) {
                Align.scaleToGameW(back, config.scale, this.scene);
            }
        } else {
            this.setBack('holder', .1);
            this.back.visible=false;
            this.back.destroy();
            this.setAlignGrid(3, 3);
        }
        //defaults
        //
        this.duration = 1000;
        if (config.duration) {
            this.duration = config.duration;
        }
        //
        //
        this.points = 1;
        if (config.points) {
            this.points = config.points;
        }
        //
        //
        //
        if (config.points) {
            this.textColor = "#ff0000";
            if (config.textColor) {
                this.textColor = config.textColor;
            }
            //
            //
            this.text1 = this.placeText("+" + this.points, 4, "POINT_BOX");
            //
            //
            /*this.text1 = new TextObj({
                scene: this.scene,
                text: "+" + this.points,
                textStyle: textStyle
            });*/
            // this.add(this.text1);
        }
        //
        //
        //position
        if (config.x) {
            this.x = config.x;
        }
        if (config.y) {
            this.y = config.y;
        }
        let targetY = -200;
        if (config.targetY) {
            targetY = config.targetY;
        }
        //move the point box
        this.scene.tweens.add({
            targets: this,
            duration: this.duration,
            alpha: 0,
            y: targetY,
            onComplete: this.done
        });
    }
    done(tween, targets, custom) {
        targets[0].destroy();
    }
}