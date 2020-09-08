/* eslint-disable */
export class UIBlock {
    constructor() {
        this._x = 0;
        this._y = 0;
        this._oldX = 0;
        this._oldY = 0;
        this._visible = true;
        this._displayWidth = 0;
        this._displayHeight = 0;
        this.children = [];
        this.childIndex = -1;
        this.isPosBlock = true;
        this._depth = 1;
        this._alpha = 1;
    }
    set depth(val) {
        this._depth = val;
        if (this.children.length > 0) {
            this.setChildDepth(this.children[0]);
        }
    }
    get depth() {
        return this._depth;
    }
    setChildDepth(child) {
        var realDepth = this._depth * 100 + child.childIndex;
        if (child.scene == undefined) {
            child.scene = gw.model.currentScene;
        }
        child.depth = realDepth;
        if (child.nextChild != null) {
            this.setChildDepth(child.nextChild);
        }
    }
    set x(val) {
        this._oldX = this._x;
        this._x = val;
        this.updatePositions();
    }
    set y(val) {
        this._oldY = this._y;
        this._y = val;
        this.updatePositions();
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    add(child) {
        this.childIndex++;
        child.childIndex = this.childIndex;
        this.children.push(child);
        this.buildList();
    }
    removeChild(child) {
        this.children.splice(child.childIndex, 1);
        this.buildList();
        var len = this.children.length;
        for (var i = 0; i < len; i++) {
            this.children[i].childIndex = i;
        }
        this.childIndex = len;
    }
    buildList() {
        var len = this.children.length;
        if (len > 1) {
            for (var i = 1; i < len; i++) {
                this.children[i - 1].nextChild = this.children[i];
            }
        }
        this.children[len - 1].nextChild = null;
    }
    willRender() {}
    get displayWidth() {
        return this._displayWidth;
    }
    get displayHeight() {
        return this._displayHeight;
    }
    setSize(w, h) {
        this._displayWidth = w;
        this._displayHeight = h;
    }
    setXY(x, y) {
        this.x = x;
        this.y = y;
        this.updatePositions();
    }
    set visible(val) {
        if (this._visible != val) {
            this._visible = val;
            if (this.children.length > 0) {
                this.updateChildVisible(this.children[0], val);
            }
        }
    }
    get visible() {
        return this._visible;
    }
    set alpha(val) {
        if (this._alpha != val) {
            this._alpha = val;
            if (this.children.length > 0) {
                this.updateChildAlpha(this.children[0], val);
            }
        }
    }
    get alpha() {
        return this._alpha;
    }
    setScrollFactor(scroll) {
        if (this.children.length > 0) {
            this.updateChildScroll(this.children[0], scroll);
        }
    }
    updateChildScroll(child, scroll) {
        child.setScrollFactor(scroll);
        if (child.nextChild) {
            child.nextChild.setScrollFactor(scroll);
        }
    }
    updateChildAlpha(child, alpha) {
        child.alpha = alpha;
        if (child.isPosBlock == true) {
            child.alpha = alpha;
        }
        if (child.nextChild != null) {
            this.updateChildAlpha(child.nextChild, alpha);
        }
    }
    updateChildVisible(child, vis) {
        child.visible = vis;
        if (child.isPosBlock == true) {
            child.visible = vis;
        }
        if (child.nextChild != null) {
            this.updateChildVisible(child.nextChild, vis);
        }
    }
    updateChildPos(child) {
        child.y = child.y - this._oldY + this._y;
        child.x = child.x - this._oldX + this._x;
        if (child.isPosBlock == true) {
            child.updatePositions();
        }
        if (child.nextChild != null) {
            this.updateChildPos(child.nextChild);
        }
        this._oldX = this._x;
        this._oldY = this._y;
    }
    updatePositions() {
        if (this.children) {
            if (this.children.length > 0) {
                this.updateChildPos(this.children[0]);
            }
        }
    }
    getRelPos(child) {
        return {
            x: child.x - this.x,
            y: child.y - this.y
        }
    }
    once(t, e, i) {}
    getChildren(myArray, child) {
        myArray.push(child);
        if (child.isPosBlock) {
            if (child.children.length > 0) {
                child.getChildren(myArray, child.children[0]);
            }
        }
        if (child.nextChild) {
            this.getChildren(myArray, child.nextChild);
        }
    }
    getAllChildren() {
        var childArray = [];
        if (this.children.length > 0) {
            this.getChildren(childArray, this.children[0]);
        }
        return childArray;
    }
    getChildAt(index) {
        return this.children[index];
    }
    setMask(mask) {
        this.getAllChildren().forEach(function(child) {
            child.setMask(mask);
        }.bind(this));
    }
    destroy() {
        var childArray = this.getAllChildren();
        this.childIndex = -1;
        var len = childArray.length;
        for (var i = 0; i < len; i++) {
            childArray[i].destroy();
        }
        this.children.length = 0;
        childArray.length = 0;
    }
}