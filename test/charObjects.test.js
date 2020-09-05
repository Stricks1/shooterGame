/* eslint-disable no-unused-vars */
import Phaser from 'phaser';
import {
  Player,
  Dolphin,
  Ink,
  Light,
  Bubble,
  Whale,
  Jelly,
  AgroFish,
  SeaHorse,
} from '../src/common/comps/charObjects';

jest.mock('../src/common/comps/charObjects');

test('Test the creation of player object', () => {
  const player = new Player('SceneMain', 0, 0, 'hero');
  expect(typeof player).toBe('object');
});

test('Test if the player constructor is called when created', () => {
  expect(Player).toHaveBeenCalled();
});

test('Test the creation of enemy dolphin object', () => {
  const dolphin = new Dolphin('SceneMain', 0, 0, 'dolphin');
  expect(typeof dolphin).toBe('object');
});

test('Test if the enemy dolphin constructor is called when created', () => {
  expect(Dolphin).toHaveBeenCalled();
});

test('Test the creation of enemy whale object', () => {
  const whale = new Whale('SceneMain', 0, 0, 'whale');
  expect(typeof whale).toBe('object');
});

test('Test if the enemy whale constructor is called when created', () => {
  expect(Whale).toHaveBeenCalled();
});

test('Test the creation of enemy jelly object', () => {
  const jelly = new Jelly('SceneMain', 0, 0, 'jelly');
  expect(typeof jelly).toBe('object');
});

test('Test if the enemy jelly constructor is called when created', () => {
  expect(Jelly).toHaveBeenCalled();
});

test('Test the creation of enemy agro fish object', () => {
  const agrofish = new AgroFish('SceneMain', 0, 0, 'jelly');
  expect(typeof agrofish).toBe('object');
});

test('Test if the enemy agro fish constructor is called when created', () => {
  expect(AgroFish).toHaveBeenCalled();
});

test('Test the creation of enemy sea horse object', () => {
  const seaHorse = new SeaHorse('SceneMain', 0, 0, 'seaHorse');
  expect(typeof seaHorse).toBe('object');
});

test('Test if the enemy sea horse constructor is called when created', () => {
  expect(SeaHorse).toHaveBeenCalled();
});

test('Test the creation of ink bullet object', () => {
  const ink = new Ink('SceneMain', 0, 0, 'ink');
  expect(typeof ink).toBe('object');
});

test('Test if the ink bullet constructor is called when created', () => {
  expect(Ink).toHaveBeenCalled();
});

test('Test the creation of bubble bullet object', () => {
  const bubble = new Bubble('SceneMain', 0, 0, 'bubble');
  expect(typeof bubble).toBe('object');
});

test('Test if the bubble bullet constructor is called when created', () => {
  expect(Bubble).toHaveBeenCalled();
});

test('Test the creation of light bullet object', () => {
  const light = new Light('SceneMain', 0, 0, 'light');
  expect(typeof light).toBe('object');
});

test('Test if the light bullet constructor is called when created', () => {
  expect(Light).toHaveBeenCalled();
});