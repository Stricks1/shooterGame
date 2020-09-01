import { BaseScene } from './baseScene';

// eslint-disable-next-line import/prefer-default-export
export class SceneOver extends BaseScene {
  constructor() {
    super('SceneOver');
  }

  // eslint-disable-next-line class-methods-use-this
  preload() {}

  create() {
    super.create();
    //
    //
    // uncomment to turn on music
    // this.mm.setBackgroundMusic('backgroundMusic');
    //
    this.setBackground('sky');
    //
    //
    this.makeAlignGrid(11, 11);
    // this.aGrid.showNumbers();
    //
    //
    //
    //  this.placeImage('title', 27, .8);
    this.placeText('Game Title', 27, 'TITLE_TEXT');
    //
    //
    //
    //  let buttonStyle = this.textStyles.getStyle(TextStyles.BUTTON_STYLE);
    // eslint-disable-next-line no-undef
    /*    const btnNext = new FlatButton({
      scene: this,
      textStyle: 'BUTTON_STYLE',
      key: 'button',
      text: 'Play Again',
      callback: this.playAgain.bind(this),
    });
    this.aGrid.placeAtIndex(104, btnNext);
*/
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