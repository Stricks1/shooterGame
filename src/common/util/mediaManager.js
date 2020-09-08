/* eslint-disable */
import {
    Model
} from "../mc/model"
import {
    EventDispatcher
} from "../mc/eventDispatcher";

let instance;
export class MediaManager {
    constructor() {}
    static getInstance(config) {
        if (instance == null) {
            instance = new MediaManager();
            instance.scene = config.scene;
            instance.model = Model.getInstance();
            instance.emitter = EventDispatcher.getInstance();
            instance.emitter.on('PLAY_SOUND', instance.playSound.bind(instance));
            instance.emitter.on('MUSIC_CHANGED', instance.musicChanged, instance);
        }
        return instance;
    }
    musicChanged() {
        if (this.background) {
            if (this.model.musicOn == false) {
                this.background.stop();
            } else {
                this.background.play();
            }
        }
    }
    playSound(key) {
        if (this.model.soundOn == true) {
            var sound = this.scene.sound.add(key);
            sound.play();
        }
    }
    setBackgroundMusic(key) {
        if (this.model.musicOn == true) {
            this.background = this.scene.sound.add(key, {
                volume: .5,
                loop: true
            });
            this.background.play();
        }
    }
}