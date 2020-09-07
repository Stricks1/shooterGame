/* eslint-disable */
import {ToggleButton} from "../ui/toggleButton";

export class SoundButtons extends Phaser.GameObjects.Container {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.musicButton = new ToggleButton({
            scene: this.scene,
            backKey: 'toggleBack',
            onIcon: 'musicOn',
            offIcon: 'musicOff',
            event: hp.actions.TOGGLE_MUSIC,
            value:this.model.musicOn
        });
        this.sfxButton = new ToggleButton({
            scene: this.scene,
            backKey: 'toggleBack',
            onIcon: 'sfxOn',
            offIcon: 'sfxOff',
            event: hp.actions.TOGGLE_SOUND,
            value:this.model.soundOn
        });
        this.add(this.musicButton);
        this.add(this.sfxButton);
        this.musicButton.y = this.musicButton.height / 2;
        this.musicButton.x = this.musicButton.width / 2;
        this.sfxButton.x = hp.game.config.width - this.sfxButton.width / 2;
        this.sfxButton.y = this.musicButton.y;
        this.scene.add.existing(this);
    }
}