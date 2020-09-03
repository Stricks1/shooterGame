import { BaseScene } from './baseScene';
import { Align } from '../common/util/align';
import Button from '../common/ui/button';
import chest from '../../assets/images/chest.png';

// eslint-disable-next-line import/prefer-default-export
export class SceneOver extends BaseScene {
  constructor() {
    super('SceneOver');
  }

  // eslint-disable-next-line class-methods-use-this
  preload() {
    this.load.image('chest', chest);
  }

  create(score) {
    super.create();
    //
    //
    // uncomment to turn on music
    // this.mm.setBackgroundMusic('backgroundMusic');
    //
    this.setBackground('seaBg');
    console.log(score.score);
    //
    //
    this.makeAlignGrid(11, 11);
    //
    //
    //
    //  this.placeImage('title', 27, .8);
    const whiteBg = this.add.image(0, 0, 'panelBack');
    Align.scaleToGameW(whiteBg, 0.9, this);
    this.aGrid.placeAtIndex(60, whiteBg);

    if (score.win) {
      this.placeText('You Won', 16, 'TITLE_TEXT');
      const chest = this.physics.add.sprite(0, 0, 'chest');
      this.aGrid.placeAtIndex(49, chest);
      Align.scaleToGameW(chest, 0.35, this);
    } else {
      this.placeText('You Lose', 16, 'TITLE_TEXT');
    }

    this.aGrid.showNumbers();


    this.placeText('SCORE', 82, 'BLACK2');
    this.placeText(`${score.score} Points`, 93, 'BLACK');
    //
    //
    //
    this.returnBtn = new Button(
      this,
      'btn1',
      'btnH1',
      'Back to Menu',
      'SceneTitle',
    );
    this.aGrid.placeAtIndex(104, this.returnBtn);
    //
    //
    //
    //
    //
    //
    this.makeUi();
    // this.placeText('Test Me!!',49,'frost');
  }

  makeUi() {
    super.makeSoundPanel();
    super.makeGear();
  }

  playAgain() {
    this.scene.start('SceneMain');
  }

  // eslint-disable-next-line class-methods-use-this
  update() {}
}