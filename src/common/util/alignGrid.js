/* eslint-disable */
export class AlignGrid {
    constructor(config) {
        this.config = config;
        if (!config.scene) {
            console.log("missing scene");
            return;
        }
        if (!config.rows) {
            config.rows = 5;
        }
        if (!config.cols) {
            config.cols = 5;
        }
        this.scene = config.scene;
        if (!config.height) {
            config.height = this.scene.sys.game.config.height;
        }
        if (!config.width) {
            config.width = this.scene.sys.game.config.width;
        }
        this.cw = config.width / config.cols;
        this.ch = config.height / config.rows;
        this.startX = 0;
        this.startY = 0;
        if (config.startX) {
            this.startX = config.startX;
        }
        if (config.startY) {
            this.startY = config.startY;
        }
    }
    show() {
        this.graphics = this.scene.add.graphics();
        this.graphics.lineStyle(2, 0xff0000);
        for (var i = 0; i < this.config.width; i += this.cw) {
            this.graphics.moveTo(this.startX + i, this.startY);
            this.graphics.lineTo(this.startX + i, this.startY + this.config.height);
        }
        for (var i = 0; i < this.config.height; i += this.ch) {
            this.graphics.moveTo(this.startX, this.startY + i);
            this.graphics.lineTo(this.startX + this.config.width, this.startY + i);
        }
        this.graphics.strokePath();
        return this.graphics;
    }
    placeAt(xx, yy, obj) {
        var x2 = this.startX + this.cw * xx + this.cw / 2;
        var y2 = this.startY + this.ch * yy + this.ch / 2;
        obj.x = x2;
        obj.y = y2;
        return {x:x2,y:y2,sx:this.startX,sy:this.startY};
    }
    placeAtIndex(index, obj) {
        var yy = Math.floor(index / this.config.cols);
        var xx = index - (yy * this.config.cols);
       return this.placeAt(xx, yy, obj);
    }
    showNumbers() {
        this.show();
        var count = 0;
        for (var i = 0; i < this.config.rows; i++) {
            for (var j = 0; j < this.config.cols; j++) {
                var numText = this.scene.add.text(0, 0, count, {
                    color: '#ff0000'
                });
                numText.setOrigin(0.5, 0.5);
                this.placeAtIndex(count, numText);
                count++;
            }
        }
    }
    showPos() {
        this.show();
        for (var i = 0; i < this.config.rows; i++) {
            for (var j = 0; j < this.config.cols; j++) {
                let posString = "x:" + j + "\ny:" + i;
                var numText = this.scene.add.text(0, 0, posString, {
                    color: '#ff0000',
                    fontSize: 16,
                    fontStyle: 'bold',
                    backgroundColor: '#000000'
                });
                numText.setOrigin(0.5, 0.5);
                this.placeAt(j, i, numText);
            }
        }
    }
     findNearestIndex(xx, yy) {
        var row = Math.floor(yy / this.ch);
        var col = Math.floor(xx / this.cw);        
        var index = (row * this.config.cols) + col;
        return index;
    }
    getPosByIndex(index) {
        var yy = Math.floor(index / this.config.cols);
        var xx = index - (yy * this.config.cols);
        var x2 = this.cw * xx + this.cw / 2;
        var y2 = this.ch * yy + this.ch / 2;
        return {
            x: x2,
            y: y2
        }
    }
}