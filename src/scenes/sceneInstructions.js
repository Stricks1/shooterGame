import { BaseScene } from './baseScene';
import { Align } from '../common/util/align';
import Button from '../common/ui/button';
import hero from '../../assets/images/bobHero.png';
import ink from '../../assets/images/inkOct.png';
import lever from '../../assets/images/lever.png';
import chest from '../../assets/images/chest.png';
import bubble from '../../assets/images/bubble-tiny-fill.png';
import enemyshoot from '../../assets/images/light.png';
import agroFish from '../../assets/images/agroFish.png';
import seaHorse from '../../assets/images/seaHorse.png';
// eslint-disable-next-line import/prefer-default-export
export class SceneInstructions extends BaseScene {
  constructor() {
    super('SceneInstructions');
  }

  // eslint-disable-next-line class-methods-use-this
  preload() {
    this.load.spritesheet('hero', hero, { frameWidth: 43, frameHeight: 48 });
    this.load.spritesheet('ink', ink, { frameWidth: 17, frameHeight: 15 });
    this.load.spritesheet('light', enemyshoot, { frameWidth: 15, frameHeight: 15 });
    this.load.spritesheet('bubble', bubble, { frameWidth: 8, frameHeight: 8 });
    this.load.spritesheet('agrofish', agroFish, { frameWidth: 30, frameHeight: 26 });
    this.load.spritesheet('lever', lever, { frameWidth: 64, frameHeight: 40 });
    this.load.spritesheet('seaHorse', seaHorse, { frameWidth: 13, frameHeight: 32 });
    this.load.image('chest', chest);
  }

  create() {
    super.create();
    this.setBackground('seaBg');
    this.anims.create({
      key: 'hero',
      frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 4 }),
      frameRate: 4,
      repeat: -1,
    });
    this.anims.create({
      key: 'ink',
      frames: this.anims.generateFrameNumbers('ink', { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'lever',
      frames: this.anims.generateFrameNumbers('lever', { start: 0, end: 1 }),
      frameRate: 1,
      repeat: -1,
    });
    this.anims.create({
      key: 'agrofish',
      frames: this.anims.generateFrameNumbers('agrofish', { start: 0, end: 7 }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: 'seaHorse',
      frames: this.anims.generateFrameNumbers('seaHorse', { start: 0, end: 3 }),
      frameRate: 3,
      repeat: -1,
    });
    this.makeAlignGrid(11, 11);
    const whiteBg = this.add.image(0, 0, 'panelBack');
    Align.scaleToGameW(whiteBg, 0.9, this);
    this.aGrid.placeAtIndex(60, whiteBg);

    const hero = this.physics.add.sprite(0, 0, 'hero');
    this.aGrid.placeAtIndex(34, hero);
    hero.anims.play('hero', true);

    this.placeText('INSTRUCTIONS', 16, 'TITLE_TEXT');

    this.placeText('CONTROLS', 27, 'BLACK2');
    this.placeText('Arrows left and right to move, arrow up to jump', 38, 'BLACK');

    const ink = this.physics.add.sprite(0, 0, 'ink');
    this.aGrid.placeAtIndex(45, ink);
    ink.anims.play('ink', true);

    this.placeText('Press space to shoot, killing enemies get you points', 49, 'BLACK');

    this.placeText('OBJECTIVES', 60, 'BLACK2');

    const light = this.physics.add.sprite(0, 0, 'light');
    const bubble = this.physics.add.sprite(0, 0, 'bubble');
    const chest = this.physics.add.sprite(0, 0, 'chest');
    const lever = this.physics.add.sprite(0, 0, 'lever');
    const seaHorse = this.physics.add.sprite(0, 0, 'seaHorse');
    const agrofish = this.physics.add.sprite(0, 0, 'agrofish');

    this.aGrid.placeAtIndex(57, chest);
    this.placeText('Our objective is to reach the chest.', 69, 'BLACK');
    this.aGrid.placeAtIndex(63, lever);
    lever.anims.play('lever', true);
    this.placeText('Use levers to open path', 74, 'BLACK');
    this.placeText('Some enemies have more than 1 life, but they run if you hit', 82, 'BLACK');
    this.placeText('Reach the chest faster to get more points', 93, 'BLACK');
    this.aGrid.placeAtIndex(97, seaHorse);
    seaHorse.anims.play('seaHorse', true);
    Align.scaleToGameW(seaHorse, 0.035, this);
    this.aGrid.placeAtIndex(89, agrofish);
    agrofish.anims.play('agrofish', true);
    Align.scaleToGameW(agrofish, 0.09, this);
    this.aGrid.placeAtIndex(90, light);
    this.aGrid.placeAtIndex(96, bubble);

    this.returnBtn = new Button(
      this,
      'btn1',
      'btnH1',
      'Back to Menu',
      'SceneTitle',
      true,
    );
    this.aGrid.placeAtIndex(104, this.returnBtn);
    this.makeUi();
  }

  makeUi() {
    super.makeSoundPanel();
    super.makeGear();
  }

  // eslint-disable-next-line class-methods-use-this
  update() {}
}