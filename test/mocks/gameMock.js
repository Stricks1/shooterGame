import Phaser from 'phaser';
import { SceneMain } from '../../src/scenes/sceneMain';
import { SceneLoad } from '../../src/scenes/sceneLoad';
import { SceneTitle } from '../../src/scenes/sceneTitle';
import { SceneOver } from '../../src/scenes/sceneOver';
import { SceneLeaderboard } from '../../src/scenes/sceneLeaderboard';
import { SceneInstructions } from '../../src/scenes/sceneInstructions';

const game = (() => {
  const config = {
    // eslint-disable-next-line no-undef
    type: Phaser.AUTO,
    width: 800,
    height: 640,
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
  return { game };
})();

export default game;