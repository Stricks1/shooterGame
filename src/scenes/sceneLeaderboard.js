import { BaseScene } from './baseScene';
import { Align } from '../common/util/align';
import Button from '../common/ui/button';
import Api from '../common/util/api';
import loading from '../../assets/images/loadImg.png';

// eslint-disable-next-line import/prefer-default-export
export class SceneLeaderboard extends BaseScene {
  constructor() {
    super('SceneLeaderboard');
  }

  // eslint-disable-next-line class-methods-use-this
  preload() {
    this.load.spritesheet('loading', loading, { frameWidth: 60, frameHeight: 53 });
  }

  create() {
    super.create();

    this.setBackground('seaBg');
    this.makeAlignGrid(11, 11);
    const whiteBg = this.add.image(0, 0, 'panelBack');
    Align.scaleToGameW(whiteBg, 0.9, this);
    this.aGrid.placeAtIndex(60, whiteBg);
    this.placeText('LEADERBOARD', 16, 'TITLE_TEXT');

    const loading = this.physics.add.sprite(0, 0, 'loading');
    this.anims.create({
      key: 'loading',
      frames: this.anims.generateFrameNumbers('loading', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.aGrid.placeAtIndex(60, loading);
    loading.anims.play('loading', true);
    Align.scaleToGameW(loading, 0.25, this);

    Api.getScores().then((response) => {
      const highScores = response.sort((a, b) => b.score - a.score);
      let playersName1 = '';
      let playersName2 = '';

      for (let i = 0; i < 10; i += 1) {
        if (i < 5) {
          playersName1 += `${i + 1} - ${highScores[i].user}: ${
            highScores[i].score
          }\n\n`;
        } else {
          playersName2 += `${i + 1} - ${highScores[i].user}: ${
            highScores[i].score
          }\n\n`;
        }
        if (i === highScores.length - 1) {
          break;
        }
      }
      loading.destroy();
      if (playersName2 !== '') {
        this.placeText(playersName1, 58, 'BLACK2');
        this.placeText(playersName2, 62, 'BLACK2');
      } else {
        this.placeText(playersName1, 60, 'BLACK2');
      }
    }).catch(() => {
      loading.destroy();
      this.placeText('Problem to connect with API\n          Try again later', 60, 'RED');
    });

    this.returnBtn = new Button(
      this,
      'btn1',
      'btnH1',
      'Back to Menu',
      'SceneTitle',
      true,
    );
    this.aGrid.placeAtIndex(93, this.returnBtn);
    this.makeUi();
  }

  makeUi() {
    super.makeSoundPanel();
    super.makeGear();
  }

  // eslint-disable-next-line class-methods-use-this
  update() {}
}