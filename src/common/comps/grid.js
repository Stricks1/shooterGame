import {UIBlock} from "../ui/uiblock";

export class Grid extends UIBlock {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.spacing = 1;
        if (config.spacing) {
            this.spacing = config.spacing;
            this.xSpacing = this.spacing;
            this.ySpacing = this.spacing;
        }
        if (config.xSpacing) {
            this.xSpacing = config.xSpacing;
        }
        if (config.ySpacing) {
            this.ySpacing = config.ySpacing;
        }
        //
        //
        //
        if (!config.cols) {
            this.cols = 4;
        } else {
            this.cols = config.cols-1;
        }
        this.w = 0;
        this.h = 0;
    }
    center() {
        this.x = ut.game.config.width / 2 - this.w / 2;
        this.y = ut.game.config.height / 2 - this.h / 2;
    }
    makeGrid() {
        var xx = 0;
        var yy = 0;
        //
        //
        var len = this.children.length;
        for (var i = 0; i < len; i++) {
            var child = this.children[i];
           
            child.x = xx * child.displayWidth * this.xSpacing;
            child.y = yy * child.displayHeight * this.ySpacing;
            if (child.x > this.w) {
                this.w = child.x;
            }
            if (child.y > this.h) {
                this.h = child.y;
            }
            xx++;
            if (xx > this.cols) {
                yy++;
                xx = 0;
            }
        }
        this.setSize(this.w, this.h);
    }
}