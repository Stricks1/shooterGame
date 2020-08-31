import { SceneMain } from './scenes/sceneMain';
import { SceneLoad } from './scenes/sceneLoad';
import { SceneTitle } from './scenes/sceneTitle';
import { SceneOver } from './scenes/sceneOver';
//
//
//
let isMobile = navigator.userAgent.indexOf('Mobile');
if (isMobile === -1) {
  isMobile = navigator.userAgent.indexOf('Tablet');
}
let w = 800;
let h = 640;
//
//
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
  scene: [SceneLoad, SceneTitle, SceneMain, SceneOver],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
};
// eslint-disable-next-line no-unused-vars, no-undef
const game = new Phaser.Game(config);