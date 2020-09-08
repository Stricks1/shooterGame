/* eslint-disable */
import {
    AlignGrid
} from "../../common/util/alignGrid";
import {
    Align
} from "../../common/util/align";
export class FormUtil {
    constructor(config) {
        this.scene = config.scene;
        this.gameWidth = this.scene.game.config.width;
        this.gameHeight = this.scene.game.config.height;
        this.alignGrid = new AlignGrid({
            scene: this.scene,
            rows: config.rows,
            cols: config.cols
        });
    }
    showNumbers() {
        this.alignGrid.showNumbers();
    }
    scaleToGameW(elName, per) {
        var el = document.getElementById(elName);
        var w = this.gameWidth * per;
        el.style.width = w + "px";
    }
    scaleToGameH(elName, per) {
        var el = document.getElementById(elName);
        var h = this.gameHeight * per;
        el.style.height = h + "px";
    }
    placeElementAt(index, elName, centerX = true, centerY = false) {
        var pos = this.alignGrid.getPosByIndex(index);
        var x = pos.x;
        var y = pos.y;
        var el = document.getElementById(elName);
        el.style.position = "absolute";
        var w = el.style.width;
        w = this.toNum(w);
        if (centerX == true) {
            x -= w / 2;
        }
        var h = el.style.height;
        h = this.toNum(h);
        if (centerY == true) {
            y -= h / 2;
        }
        el.style.top = y + "px";
        el.style.left = x + "px";
    }
    toNum(s) {
        s = s.replace("px", "");
        s = parseInt(s);
        return s;
    }
    addChangeCallback(elName, fun, scope = null) {
        var el = document.getElementById(elName);
        if (scope == null) {
            el.onchange = fun;
        } else {
            el.onchange = fun.bind(scope);
        }
    }
    hideElement(elName) {
        var el = document.getElementById(elName);
        el.style.display = "none";
    }
    showElement(elName) {
        var el = document.getElementById(elName);
        el.style.display = "block";
    }
    getTextAreaValue(elName) {
        var el = document.getElementById(elName);
        return el.value;
    }
    getTextValue(elName) {
        var el = document.getElementById(elName);
        return el.innerText;
    }
    setTextValue(elName, val) {
        var el = document.getElementById(elName);
        window.el=el;
        el.value = val;
    }
    copyFrom(elName)
    {
         var el = document.getElementById(elName);
         el.select();
        document.execCommand('copy');
    }
    addClickCallback(elName, fun, scope = null) {
        var el = document.getElementById(elName);
        if (scope == null) {
            el.onclick = fun;
        } else {
            el.onclick = fun.bind(scope);
        }
    }
    addOption(dropDown, text, item) {
        var select = document.getElementById(dropDown);
        var option = document.createElement('option');
        option.text = text;
        option.data = item;
        select.add(option, 0);
    }
    getSelectedItem(dropDown) {
        var e = document.getElementById(dropDown);
        return e.options[e.selectedIndex].data;
    }
    getSelectedIndex(dropDown) {
        var el = document.getElementById(dropDown);
        return el.selectedIndex;
    }
    getSelectedText(dropDown) {
        var e = document.getElementById(dropDown);
        return e.options[e.selectedIndex].text;
    }
}