import { BaseScene } from './baseScene';
import { Bar } from '../common/comps/bar';
import { Align } from '../common/util/align';
import { StarBurst } from '../common/effects/starBurst';
import { ColorBurst } from '../common/effects/colorBurst';
import { Flare } from '../common/effects/flare';

// eslint-disable-next-line import/prefer-default-export
export class SceneLoad extends BaseScene {
  constructor() {
    super('SceneLoad');
  }

  preload() {
    this.common = './assets/';
    this.imagePath = `${this.common}images/`;
    this.audioPath = `${this.common}audio/`;
    /**
     *
     * make the loading bars
     *
     */
    this.bar2 = new Bar({
      scene: this,
      height: this.sys.game.config.height * 0.1,
      width: this.sys.game.config.width * 0.8,
      color: 0xffffff,
    });
    this.bar = new Bar({
      scene: this,
      height: this.sys.game.config.height * 0.1,
      width: this.sys.game.config.width * 0.8,
    });
    Align.center(this.bar, this);
    Align.center(this.bar2, this);
    /*
       set up the progress
     */
    this.load.on('progress', this.onProgress, this);
    /**
     *
     *LOAD THE ASSETS
     *
     */
    const iconArray = ['gear', 'musicOff', 'musicOn', 'sfxOn', 'sfxOff', 'iconLock', 'iconHome', 'iconNext', 'iconPrev'];
    for (let i = 0; i < iconArray.length; i += 1) {
      this.loadIcon(iconArray[i]);
    }
    //
    // game png
    //
    const pngArray = ['panelBack', 'title', 'far'];
    for (let i = 0; i < pngArray.length; i += 1) {
      this.loadPng(pngArray[i], this.imagePath);
    }
    //
    // game jpg
    //
    const jpgArray = ['sky'];
    for (let i = 0; i < jpgArray.length; i += 1) {
      this.loadJpg(jpgArray[i], this.imagePath);
    }
    //
    // game wav
    //
    const wavArray = [];
    for (let i = 0; i < wavArray.length; i += 1) {
      this.loadWav(wavArray[i], this.audioPath);
    }
    //
    // game mp3
    //
    const mp3Array = ['underwater'];
    for (let i = 0; i < mp3Array.length; i += 1) {
      this.loadMp3(mp3Array[i], this.audioPath);
    }
    //
    // common wav
    //
    const cwavArray = ['smw_jump', 'smb_bump'];
    for (let i = 0; i < cwavArray.length; i += 1) {
      this.loadWav(cwavArray[i]);
    }
    //
    //
    //
    const cmp3Array = ['underwater'];
    for (let i = 0; i < cmp3Array.length; i += 1) {
      this.loadMp3(cmp3Array[i]);
    }
    //        //
    //
    // load toggles and buttons
    //
    this.loadToggle(1);
    this.loadToggle(2);
    this.loadButton('button', 1, 2);
    //
    // load effects
    //
    StarBurst.preload(this, `${this.common}images/effects/stars.png`);
    ColorBurst.preload(this, `${this.common}images/effects/colorStars.png`);
    Flare.preload(this, `${this.common}images/effects/flare.png`);
    // used for point box
    this.load.image('holder', `${this.common}images/ui/backs/holder.jpg`);
  }

  onProgress(value) {
    this.bar.setPercent(value);
  }

  create() {
    this.scene.start('SceneTitle');
  }

  loadButton(key, style, number) {
    this.load.image(key, `${this.imagePath}ui/buttons/${style}/${number}.png`);
  }

  loadIcon(key) {
    this.load.image(key, `${this.imagePath}ui/icons/${key}.png`);
  }

  loadToggle(key) {
    this.load.image(`toggle${key}`, `${this.imagePath}ui/toggles/${key}.png`);
  }

  loadJpg(key, mainPath = '') {
    if (mainPath === '') {
      mainPath = this.imagePath;
    }
    this.load.image(key, `${mainPath + key}.jpg`);
  }

  loadPng(key, mainPath = '') {
    if (mainPath === '') {
      mainPath = this.imagePath;
    }
    this.load.image(key, `${mainPath + key}.png`);
  }

  loadWav(key, mainPath = '') {
    if (mainPath === '') {
      mainPath = this.audioPath;
    }
    this.load.audio(key, `${mainPath + key}.wav`);
  }

  loadMp3(key, mainPath = '') {
    if (mainPath === '') {
      mainPath = this.audioPath;
    }
    this.load.audio(key, `${mainPath + key}.mp3`);
  }

  // eslint-disable-next-line class-methods-use-this
  update() {}
}