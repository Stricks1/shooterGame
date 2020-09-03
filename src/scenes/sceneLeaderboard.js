import { BaseScene } from './baseScene';
import Button from '../common/ui/button';
import Api from '../common/util/api';

// eslint-disable-next-line import/prefer-default-export
export class SceneLeaderboard extends BaseScene {
  constructor() {
    super('SceneLeaderboard');
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
    // this.aGrid.showNumbers();
    //
    //
    //
    //  this.placeImage('title', 27, .8);
    this.placeText('LEADERBOARD', 16, 'TITLE_TEXT');
    //
    //
    //  CHECK WHY API STOPPED WORKING
    /*
    Api.setScores('Gabriel', 450).then((response) => {
      console.log(response);
    });
    */
    this.returnBtn = new Button(
      this,
      'btn1',
      'btnH1',
      'Back to Menu',
      'SceneTitle',
      true,
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