import gameMock from './mocks/gameMock';
import { SceneMain } from '../src/scenes/sceneMain';
import { SceneLoad } from '../src/scenes/sceneLoad';
import { SceneTitle } from '../src/scenes/sceneTitle';
import { SceneOver } from '../src/scenes/sceneOver';
import { SceneLeaderboard } from '../src/scenes/sceneLeaderboard';
import { SceneInstructions } from '../src/scenes/sceneInstructions';

test('Receive a game object with all needed scenes on creating new game', () => {
  const { game } = gameMock;
  expect(game.config.sceneConfig).toContain(SceneMain);
  expect(game.config.sceneConfig).toContain(SceneLoad);
  expect(game.config.sceneConfig).toContain(SceneTitle);
  expect(game.config.sceneConfig).toContain(SceneOver);
  expect(game.config.sceneConfig).toContain(SceneLeaderboard);
  expect(game.config.sceneConfig).toContain(SceneInstructions);
});