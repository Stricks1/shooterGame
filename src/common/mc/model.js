/* eslint-disable */
import {
    EventDispatcher
} from "../mc/eventDispatcher";

let instance = null;
export class Model {
    constructor() {
        if (instance == null) {
            instance = this;
        }
        this._score = 0;
        this.soundOn = true;
        this.musicOn = true;
        this.emitter = EventDispatcher.getInstance();
    }
    static getInstance() {
        if (instance == null) {
            instance = new Model();
        }
        return instance;
    }
    toggleMusic() {
        this.musicOn = !this.musicOn;
        this.emitter.emit("MUSIC_STAT_CHANGED");
    }
    toggleSound() {
        this.soundOn = !this.soundOn;       
    }
    set score(val) {
        this._score = val;
        this.emitter.emit("SCORE_UPDATED");
    }
    get score() {
        return this._score;
    }
    getStars() {
        return 3;
    }
}