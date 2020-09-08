/* eslint-disable */
import {
    EventDispatcher
} from "../mc/eventDispatcher";
import {
    Model
} from "../mc/model";
import {
    MediaManager
} from "../../common/util/mediaManager";
let instance
export class Controller {
    constructor() {
        this.model = Model.getInstance();
        this.mm = MediaManager.getInstance();
        this.emitter = EventDispatcher.getInstance();
        this.emitter.on("TOGGLE_MUSIC", this.toggleMusic.bind(this));
        this.emitter.on("TOGGLE_SOUND", this.toggleSound.bind(this));
        this.emitter.on('SET_SCORE', this.setScore.bind(this));
        this.emitter.on('UP_POINTS', this.upPoints.bind(this));
    }
    static getInstance() {
        if (instance == null) {
            instance = new Controller();
        }
        return instance;
    }
    toggleMusic() {
        this.model.toggleMusic();
        this.mm.musicChanged();
    }
    toggleSound() {
        this.model.toggleSound();
    }
    setScore(score) {
        this.model.score = score;
    }
    upPoints(points) {
        var score = this.model.score;
        score += points;
        this.model.score = score;
    }
}