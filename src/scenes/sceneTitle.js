import { BaseScene } from './baseScene';
import Button from '../common/ui/button';
// eslint-disable-next-line import/prefer-default-export
export class SceneTitle extends BaseScene {
  constructor() {
    super('SceneTitle');
  }

  preload() {
    super.preload();
  }

  create() {
    super.create();

    this.mm.setBackgroundMusic('underwater');
    this.setBackground('seaBg');
    this.makeAlignGrid(11, 11);
    this.placeText('Pacific Treasures', 27, 'TITLE_TEXT');

    this.startGame = new Button(
      this,
      'btn1',
      'btnH1',
      'Play Game',
      'SceneMain',
    );
    this.aGrid.placeAtIndex(49, this.startGame);

    this.instructionBtn = new Button(
      this,
      'btn1',
      'btnH1',
      'Instructions',
      'SceneInstructions',
    );
    this.aGrid.placeAtIndex(71, this.instructionBtn);

    this.leaderboardBtn = new Button(
      this,
      'btn1',
      'btnH1',
      'Leaderboard',
      'SceneLeaderboard',
    );
    this.aGrid.placeAtIndex(93, this.leaderboardBtn);
    this.makeUi();
  }

  makeUi() {
    super.makeSoundPanel();
    super.makeGear();
  }

  // eslint-disable-next-line class-methods-use-this
  update() {}
}