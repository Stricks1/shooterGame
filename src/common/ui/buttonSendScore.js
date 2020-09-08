import { Align } from '../util/align';
import Api from '../util/api';

// eslint-disable-next-line no-undef
export default class ButtonScore extends Phaser.GameObjects.Container {
  constructor(scene, key1, key2, score) {
    super(scene);
    this.scene = scene;
    this.score = score;

    this.button = this.scene.add.sprite(0, 0, key1).setInteractive();
    this.text = this.scene.add.text(0, 0, 'Send Score', {
      fontSize: '20px',
      fill: '#fff',
    });
    // eslint-disable-next-line no-undef
    Phaser.Display.Align.In.Center(this.text, this.button);
    Align.scaleToGameW(this.button, 0.20, scene);

    this.add(this.button);
    this.add(this.text);

    this.button.on('pointerdown', () => {
      const el = document.getElementById('enterName');
      if (el.value !== '') {
        // eslint-disable-next-line no-unused-vars
        Api.setScores(el.value, this.score).then((_response) => {
          this.scene.scene.start('SceneLeaderboard');
        }).catch(() => {
          this.scene.scene.start('SceneLeaderboard');
        });
      } else {
        this.scene.placeText("* can't be blank", 63, 'RED');
      }
    });

    this.button.on('pointerover', () => {
      this.button.setTexture(key2);
      Align.scaleToGameW(this.button, 0.23, scene);
    });

    this.button.on('pointerout', () => {
      this.button.setTexture(key1);
      Align.scaleToGameW(this.button, 0.20, scene);
    });

    this.scene.add.existing(this);
  }
}