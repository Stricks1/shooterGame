import { SceneMain } from './scenes/sceneMain';
import { SceneLoad } from './scenes/sceneLoad';
import { SceneTitle } from './scenes/sceneTitle';
import { SceneOver } from './scenes/sceneOver';
import { SceneLeaderboard } from './scenes/sceneLeaderboard';
import { SceneInstructions } from './scenes/sceneInstructions';

let isMobile = navigator.userAgent.indexOf('Mobile');
if (isMobile === -1) {
  isMobile = navigator.userAgent.indexOf('Tablet');
}
let w = 800;
let h = 640;
if (isMobile !== -1) {
  w = window.innerWidth;
  h = window.innerHeight;
}
const config = {
  // eslint-disable-next-line no-undef
  type: Phaser.AUTO,
  width: w,
  height: h,
  parent: 'phaser-game',
  scene: [SceneLoad, SceneTitle, SceneMain, SceneOver, SceneLeaderboard, SceneInstructions],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  dom: {
    createContainer: true,
  },
};
// eslint-disable-next-line no-unused-vars, no-undef
const game = new Phaser.Game(config);