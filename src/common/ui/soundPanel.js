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
        //
        //
        //
        this.back = this.scene.add.image(0, 0, "panelBack");
        Align.scaleToGameW(this.back, .6, this.scene);
        this.add(this.back);
        //
        //
        let btnMusic = new ToggleButton({
            scene: this.scene,
            backKey: 'toggle2',
            onIcon: 'musicOn',
            offIcon: 'musicOff',
            event: 'TOGGLE_MUSIC',
            scale: .2,
            value: model.musicOn,
            x: 0,
            y: 0
        });
        this.add(btnMusic);
        //
        //
        //
        let btnSound = new ToggleButton({
            scene: this.scene,
            backKey: 'toggle2',
            onIcon: 'sfxOn',
            offIcon: 'sfxOff',
            event: 'TOGGLE_SOUND',
            value: model.soundOn,
            scale: .2,
            x: 0,
            y: 0
        });
        this.add(btnSound);
        //
        //
        //
        btnMusic.x = this.back.x - this.back.displayWidth * .25;
        btnSound.x = this.back.x + this.back.displayWidth * .25;
    }
}