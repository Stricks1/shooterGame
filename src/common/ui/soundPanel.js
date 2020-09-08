/* eslint-disable */
import {
    ToggleButton
} from "./toggleButton";
import {
    UIBlock
} from "./uiblock";
import {
    Align
} from "../util/align";
import {
    Model
} from "../mc/model";
export class SoundPanel extends UIBlock {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        let model = Model.getInstance();
        let btnMusic = new ToggleButton({
            scene: this.scene,
            backKey: 'toggle1',
            onIcon: 'musicOn',
            offIcon: 'musicOff',
            event: 'TOGGLE_MUSIC',
            scale: .2,
            value: model.musicOn,
            x: 0,
            y: 0
        });
        this.add(btnMusic);
        let btnSound = new ToggleButton({
            scene: this.scene,
            backKey: 'toggle1',
            onIcon: 'sfxOn',
            offIcon: 'sfxOff',
            event: 'TOGGLE_SOUND',
            value: model.soundOn,
            scale: .2,
            x: 0,
            y: 0
        });
        this.add(btnSound);
        btnMusic.x = -480 * .25;
        btnSound.x = 480 * .25;
        btnMusic.setScrollFactor(0);
        btnSound.setScrollFactor(0);
    }
}