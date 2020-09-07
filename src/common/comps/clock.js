/* eslint-disable */
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
    EventDispatcher
} from "../mc/eventDispatcher";

export class Clock extends UIBlock {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        if (!config.secs) {
            this.secs = 60;
        } else {
            this.secs--;
        }
        if (config.callback) {
            this.callback = config.callback;
        }
        this.useOnlySeconds = false;
        if (config.useOnlySeconds) {
            this.useOnlySeconds = config.useOnlySeconds;
        }
        this.emitter = EventDispatcher.getInstance();
        this.resetSecs = this.secs;
        this.text1 = new TextObj({
            scene: this.scene,
            text: config.text,
            textStyle: config.textStyle
        });
        this.add(this.text1);
        this.setText();
        this.setSize(this.text1.displayWidth, this.text1.displayHeight);
        this.scene.add.existing(this);
        this.emitter.on("SET_TIME", this.setClock.bind(this));
        this.emitter.on("ADD_TIME", this.addTime.bind(this));
        this.emitter.on("STOP_TIME", this.stopClock.bind(this));
        this.emitter.on("START_TIME", this.startClock.bind(this));
        this.emitter.on("RESET_TIME", this.resetClock.bind(this));
    }
    getClockTime() {
        return this.secs;
    }
    startClock() {
        this.timer = this.scene.time.addEvent({
            delay: 1000,
            callback: this.tick,
            callbackScope: this,
            loop: true
        });
    }
    stopClock() {
        this.timer.remove();
    }
    setClock(params) {
        this.secs = params;
        this.setText();
    }
    addTime(params) {
        this.secs += params;
    }
    resetClock() {
        this.secs = this.resetSecs;
    }
    tick() {
        this.secs--;
        if (this.secs == 0) {
            if (this.callback) {
                this.callback();
            }
            this.emitter.emit("TIMES_UP");
        }
        this.setText();
    }
    setText2() {
        var mins = Math.floor(this.secs / 60);
        var secs = this.secs - (mins * 60);
        secs = this.leadingZeros(secs);
        mins = this.leadingZeros(mins);
        this.text1.setText(secs + "s");
    }
    setText() {
        if (this.useOnlySeconds == true) {
            this.setText2();
            return;
        }
        var mins = Math.floor(this.secs / 60);
        var secs = this.secs - (mins * 60);
        secs = this.leadingZeros(secs);
        mins = this.leadingZeros(mins);
        this.text1.setText(mins + ":" + secs);
    }
    leadingZeros(num) {
        if (num < 10) {
            return "0" + num;
        }
        return num;
    }
}