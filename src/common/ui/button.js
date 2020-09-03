import { Align } from '../util/align';

// eslint-disable-next-line no-undef
export default class Button extends Phaser.GameObjects.Container {
  constructor(scene, key1, key2, text, targetScene, turnOff = false) {
    super(scene);
    this.scene = scene;

    this.button = this.scene.add.sprite(0, 0, key1).setInteractive();
    this.text = this.scene.add.text(0, 0, text, {
      fontSize: '32px',
      fill: '#fff',
    });
    // eslint-disable-next-line no-undef
    Phaser.Display.Align.In.Center(this.text, this.button);
    Align.scaleToGameW(this.button, 0.32, scene);

    this.add(this.button);
    this.add(this.text);

    this.button.on('pointerdown', () => {
      if (turnOff) {
        this.scene.mm.background.stop();
      }
      this.scene.scene.start(targetScene);
    });

    this.button.on('pointerover', () => {
      this.button.setTexture(key2);
      Align.scaleToGameW(this.button, 0.37, this.scene);
    });

    this.button.on('pointerout', () => {
      this.button.setTexture(key1);
      Align.scaleToGameW(this.button, 0.32, this.scene);
    });

    this.scene.add.existing(this);
  }
}