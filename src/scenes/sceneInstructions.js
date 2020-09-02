import { BaseScene } from './baseScene';
import { Align } from '../common/util/align';
import Button from '../common/ui/button';
// eslint-disable-next-line import/prefer-default-export
export class SceneInstructions extends BaseScene {
  constructor() {
    super('SceneInstructions');
  }

  // eslint-disable-next-line class-methods-use-this
  preload() {}

  create() {
    super.create();
    //
    //
    this.setBackground('seaBg');
    //
    //
    this.makeAlignGrid(11, 11);
     this.aGrid.showNumbers();
    //
    //
    //
    //  this.placeImage('title', 27, .8);
    //
    //
    const whiteBg = this.add.image(0, 0, 'panelBack');
    Align.scaleToGameW(whiteBg, 0.9, this);
    this.aGrid.placeAtIndex(60, whiteBg);

    this.placeText('INSTRUCTIONS', 14, 'TITLE_TEXT');

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

  // eslint-disable-next-line class-methods-use-this
  update() {}
}