import { BaseScene } from './baseScene';
import { Align } from '../common/util/align';
import bgr1 from '../../assets/images/far.png';
import bgr2 from '../../assets/images/sand.png';
import bgr3 from '../../assets/images/foreground-1.png';
import bgr32 from '../../assets/images/foreground-2.png';
import ground1 from '../../assets/images/tiles-sand-coral.png';
import ground2 from '../../assets/images/tiles-rock.png';
import ground3 from '../../assets/images/tiles-sandbar2.png';
import ground4 from '../../assets/images/tiles-giantKelp.png';
import lever from '../../assets/images/lever.png';
import chest from '../../assets/images/chest.png';
import enWall from '../../assets/images/8bit-tile-sparkle-water-vert.png';
import hero from '../../assets/images/bobHero.png';
import dolp from '../../assets/images/dolphins.png';
import ink from '../../assets/images/inkOct.png';
import bubble from '../../assets/images/bubble-tiny-fill.png';
import enemyshoot from '../../assets/images/light.png';
import whale from '../../assets/images/bluewhaleLR.png';
import jelly from '../../assets/images/jelly.png';
import agroFish from '../../assets/images/agroFish.png';
import seaHorse from '../../assets/images/seaHorse.png';
import { AlignGrid } from '../common/util/alignGrid';
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
} from '../common/comps/charObjects';
import { Clock } from '../common/comps/clock';

//
//
//

/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/prefer-default-export
export class SceneMain extends BaseScene {
  constructor() {
    super('SceneMain');
  }

  preload() {
    this.load.image('bkgr1', bgr1);
    this.load.image('bkgr2', bgr2);
    this.load.image('bkgr3', bgr3);
    this.load.image('bkgr32', bgr32);
    this.load.image('ground1', ground1);
    this.load.image('ground2', ground2);
    this.load.image('ground3', ground3);
    this.load.image('ground4', ground4);
    this.load.image('chest', chest);
    this.load.image('enWall', enWall);
    this.load.spritesheet('hero', hero, { frameWidth: 43, frameHeight: 48 });
    this.load.spritesheet('dolphin', dolp, { frameWidth: 64, frameHeight: 30 });
    this.load.spritesheet('ink', ink, { frameWidth: 17, frameHeight: 15 });
    this.load.spritesheet('light', enemyshoot, { frameWidth: 15, frameHeight: 15 });
    this.load.spritesheet('bubble', bubble, { frameWidth: 8, frameHeight: 8 });
    this.load.spritesheet('whale', whale, { frameWidth: 64, frameHeight: 33 });
    this.load.spritesheet('jelly', jelly, { frameWidth: 28, frameHeight: 25 });
    this.load.spritesheet('agrofish', agroFish, { frameWidth: 30, frameHeight: 26 });
    this.load.spritesheet('seaHorse', seaHorse, { frameWidth: 13, frameHeight: 32 });
    this.load.spritesheet('lever', lever, { frameWidth: 64, frameHeight: 40 });
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  create() {
    // set up the base scene
    super.create();
    // set the grid for the scene
    this.makeAlignGrid(11, 11);

    this.blockGrid = new AlignGrid({
      scene: this,
      rows: 11,
      cols: 120,
      width: 800 * 10,
    });
    this.brickGroup = this.physics.add.group();
    this.enWallGroup = this.physics.add.group();

    const totalWidth = this.sys.game.config.width * 10;

    const bg1 = this.add.image(0, 0, 'bkgr1').setScrollFactor(0);
    bg1.displayHeight = this.sys.game.config.height;
    bg1.scaleX = bg1.scaleY;
    bg1.y = this.sys.game.config.height / 2;
    bg1.x = this.sys.game.config.width / 2;

    this.backGroundAlign(totalWidth, 'bkgr2', 'bkgr2', 0.25);
    this.backGroundAlign(totalWidth, 'bkgr3', 'bkgr32', 0.50);

    this.cameras.main.setBounds(0, 0, this.sys.game.config.width * 10, this.sys.game.config.height);


    // create chest endGame
    this.makeFloor(357, 359, 'ground2');
    const chest = this.physics.add.sprite(0, 0, 'chest');
    this.blockGrid.placeAtIndex(238, chest);
    this.physics.add.collider(chest, this.brickGroup);
    chest.setGravityY(100);

    // create levers
    this.lever = this.physics.add.sprite(0, 0, 'lever');
    this.blockGrid.placeAtIndex(1198, this.lever);
    Align.scaleToGameW(this.lever, 0.075, this);
    this.lever.setImmovable();

    this.lever2 = this.physics.add.sprite(0, 0, 'lever');
    this.blockGrid.placeAtIndex(1155, this.lever2);
    Align.scaleToGameW(this.lever2, 0.075, this);
    this.lever2.setImmovable();

    this.physics.world.setBounds(0, 0,
      this.sys.game.config.width * 10, this.sys.game.config.height);

    // create scenario tiles and platforms
    this.placeBlock(21, 'ground2', 0.075);
    this.placeBlock(141, 'ground2', 0.075);
    this.placeBlock(677, 'ground2', 0.075);
    this.placeBlock(797, 'ground2', 0.075);
    this.placeBlock(917, 'ground2', 0.075);
    this.placeBlock(1037, 'ground2', 0.075);
    this.placeBlock(1157, 'ground2', 0.075);
    this.placedoorHalf();
    this.placedoorEnd();
    this.placeBlock(356, 'ground2');
    this.makeFloor(863, 870, 'ground3');
    this.makeFloor(513, 530, 'ground3');
    this.makeFloor(1020, 1025, 'ground3');
    this.makeFloor(787, 790, 'ground3');
    this.makeFloor(551, 557, 'ground3');
    this.makeFloor(451, 460, 'ground3');
    this.makeFloor(840, 842, 'ground3');
    this.makeFloor(799, 800, 'ground3');
    this.makeFloor(822, 832, 'ground3');
    this.makeFloor(595, 595, 'ground3');

    // floor
    this.makeFloor(1200, 1319, 'ground1');

    // Enemy creations
    // create dolphin
    this.dolphinsGroup = this.physics.add.group();
    this.createDolphin(725);
    this.placeWall(723, 'enWall');
    this.placeWall(730, 'enWall');
    this.createDolphin(848);
    this.placeWall(845, 'enWall');
    this.placeWall(855, 'enWall');
    this.createDolphin(985);
    this.placeWall(983, 'enWall');
    this.placeWall(991, 'enWall');
    this.createDolphin(423);
    this.placeWall(420, 'enWall');
    this.placeWall(426, 'enWall');
    this.createDolphin(665);
    this.placeWall(663, 'enWall');
    this.placeWall(668, 'enWall');
    this.createDolphin(1061);
    this.placeWall(1058, 'enWall');
    this.placeWall(1063, 'enWall');
    this.createDolphin(836);
    this.placeWall(834, 'enWall');
    this.placeWall(839, 'enWall');
    this.createDolphin(1077);
    this.placeWall(1075, 'enWall');
    this.placeWall(1079, 'enWall');
    this.createDolphin(416);
    this.placeWall(414, 'enWall');
    this.placeWall(419, 'enWall');
    this.createDolphin(706);
    this.placeWall(701, 'enWall');
    this.placeWall(711, 'enWall');
    this.createDolphin(468);
    this.placeWall(465, 'enWall');
    this.placeWall(471, 'enWall');
    this.physics.add.collider(this.dolphinsGroup, this.enWallGroup);

    // create whales
    this.whalesGroup = this.physics.add.group();
    this.createWhale(367);
    this.placeWall(364, 'enWall');
    this.placeWall(370, 'enWall');
    this.createWhale(266);
    this.placeWall(263, 'enWall');
    this.placeWall(270, 'enWall');
    this.createWhale(215);
    this.placeWall(210, 'enWall');
    this.placeWall(220, 'enWall');
    this.createWhale(890);
    this.placeWall(887, 'enWall');
    this.placeWall(898, 'enWall');
    this.physics.add.collider(this.whalesGroup, this.enWallGroup);

    // create jelly
    this.jellysGroup = this.physics.add.group();
    this.createJelly(620);
    this.placeWall(140, 'enWall');
    this.placeWall(1220, 'enWall');
    this.createJelly(879);
    this.placeWall(519, 'enWall');
    this.placeWall(1239, 'enWall');
    this.createJelly(439);
    this.placeWall(79, 'enWall');
    this.placeWall(799, 'enWall');
    this.createJelly(820);
    this.placeWall(460, 'enWall');
    this.placeWall(1180, 'enWall');
    this.createJelly(355);
    this.placeWall(115, 'enWall');
    this.placeWall(595, 'enWall');
    this.physics.add.collider(this.jellysGroup, this.enWallGroup);

    // create agroFish
    this.agroFishesGroup = this.physics.add.group();
    this.createAgroFish(615);
    this.placeWall(612, 'enWall');
    this.placeWall(618, 'enWall');
    this.createAgroFish(400);
    this.placeWall(396, 'enWall');
    this.placeWall(410, 'enWall');
    this.createAgroFish(433);
    this.placeWall(430, 'enWall');
    this.placeWall(437, 'enWall');
    this.createAgroFish(808);
    this.placeWall(805, 'enWall');
    this.placeWall(812, 'enWall');
    this.createAgroFish(1166);
    this.placeWall(1161, 'enWall');
    this.placeWall(1170, 'enWall');
    this.createAgroFish(1194);
    this.placeWall(1190, 'enWall');
    this.placeWall(1198, 'enWall');
    this.physics.add.collider(this.agroFishesGroup, this.enWallGroup);

    // create Sea Horses
    this.seaHorsesGroup = this.physics.add.group();
    this.createSeaHorse(482);
    this.placeWall(480, 'enWall');
    this.placeWall(484, 'enWall');
    this.createSeaHorse(1031);
    this.placeWall(1029, 'enWall');
    this.placeWall(1034, 'enWall');
    this.createSeaHorse(1004);
    this.placeWall(1001, 'enWall');
    this.placeWall(1007, 'enWall');
    this.physics.add.collider(this.seaHorsesGroup, this.enWallGroup);


    // create main character
    this.player = new Player(this, 100, 450, 'hero');
    this.blockGrid.placeAtIndex(961, this.player);
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, this.brickGroup);
    this.physics.add.collider(this.player, this.dolphinsGroup, () => { this.gameOver(false); });
    this.physics.add.collider(this.player, this.whalesGroup, () => { this.gameOver(false); });
    this.physics.add.collider(this.player, this.jellysGroup, () => { this.gameOver(false); });
    this.physics.add.collider(this.player, this.agroFishesGroup, () => { this.gameOver(false); });
    this.physics.add.collider(this.player, this.seaHorsesGroup, () => { this.gameOver(false); });
    this.physics.add.collider(this.player, chest, () => { this.gameOver(true); });
    this.physics.add.collider(this.player, this.lever, () => {
      this.lever.anims.play('leverDown');
      this.doorEnd1.destroy();
      this.doorEnd2.destroy();
    });
    this.physics.add.collider(this.player, this.lever2, () => {
      this.lever2.anims.play('leverDown');
      this.doorHalf1.destroy();
      this.doorHalf2.destroy();
      this.doorHalf3.destroy();
      this.doorHalf4.destroy();
    });
    this.player.animation();

    this.anims.create({
      key: 'ink',
      frames: this.anims.generateFrameNumbers('ink', { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'light',
      frames: [{ key: 'light', frame: 0 }],
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'bubble',
      frames: [{ key: 'bubble', frame: 0 }],
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'leverDown',
      frames: [{ key: 'lever', frame: 1 }],
      frameRate: 10,
      repeat: -1,
    });

    this.cameras.main.startFollow(this.player);

    //
    //
    // this.blockGrid.showNumbers();
    this.makeUi();
    this.scorePoints = 0;
  }

  gameOver(finish) {
    this.mm.playSound('game_over');
    this.mm.background.stop();
    if (finish) {
      this.emitter.emit('STOP_TIME');
      const secounds = this.clock.getClockTime();
      this.scorePoints += (secounds * 5);
    } else {
      this.emitter.emit('STOP_TIME');
    }
    this.input.keyboard.removeCapture(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.input.keyboard.removeCapture(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.input.keyboard.removeCapture(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.input.keyboard.removeCapture(Phaser.Input.Keyboard.KeyCodes.UP);
    this.input.keyboard.removeCapture(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.scene.start('SceneOver', { score: this.scorePoints, win: finish });
  }

  createDolphin(place) {
    const dolph = new Dolphin(this, 0, 0, 'dolphin');
    this.dolphinsGroup.add(dolph);
    dolph.animation();
    dolph.moveRight();
    this.blockGrid.placeAtIndex(place, dolph);
    Align.scaleToGameW(dolph, 0.075, this);
  }

  createWhale(place) {
    const whale = new Whale(this, 0, 0, 'whale');
    this.whalesGroup.add(whale);
    whale.animation();
    whale.setImmovable();
    whale.moveRight();
    this.blockGrid.placeAtIndex(place, whale);
    Align.scaleToGameW(whale, 0.25, this);
    whale.body.setSize(whale.width, whale.height / 1.5, false);
  }

  createJelly(place) {
    const jelly = new Jelly(this, 0, 0, 'jelly');
    this.jellysGroup.add(jelly);
    jelly.animation();
    jelly.moveUp();
    this.blockGrid.placeAtIndex(place, jelly);
    Align.scaleToGameW(jelly, 0.05, this);
  }

  createAgroFish(place) {
    const agro = new AgroFish(this, 0, 0, 'agroFish');
    this.agroFishesGroup.add(agro);
    agro.animation();
    agro.setImmovable();
    agro.moveRight();
    this.blockGrid.placeAtIndex(place, agro);
    Align.scaleToGameW(agro, 0.075, this);
    agro.body.setSize(agro.width, agro.height / 1.35, false);
  }


  createSeaHorse(place) {
    const seaHorse = new SeaHorse(this, 0, 0, 'seaHorse');
    this.seaHorsesGroup.add(seaHorse);
    seaHorse.animation();
    seaHorse.setImmovable();
    seaHorse.moveRight();
    this.blockGrid.placeAtIndex(place, seaHorse);
    Align.scaleToGameW(seaHorse, 0.025, this);
  }


  backGroundAlign(totalWidth, texture, texture2, scrollFactor) {
    const w = this.textures.get(texture).getSourceImage().width;
    const count = Math.ceil(totalWidth / w) * scrollFactor;
    let x = 0;
    let actText = texture;
    for (let i = 0; i < count; i += 1) {
      const m = this.add.image(x, 0, actText)
        .setScrollFactor(scrollFactor);
      m.displayHeight = this.sys.game.config.height;
      m.scaleX = m.scaleY;
      m.y = (this.sys.game.config.height / 2) * 0.81;
      m.x = this.sys.game.config.width / 2 + x;
      x += m.width * m.scaleY;
      if (i % 4 === 0) {
        actText = texture2;
      } else {
        actText = texture;
      }
    }
  }

  makeFloor(fromPos, toPos, key) {
    for (let i = fromPos; i < toPos + 1; i += 1) {
      this.placeBlock(i, key);
    }
  }

  placeWall(pos, key) {
    const block = this.physics.add.sprite(0, 0, key);
    this.blockGrid.placeAtIndex(pos, block);
    this.enWallGroup.add(block);
    block.setImmovable();
    block.visible = false;
    Align.scaleToGameW(block, 0.025, this);
  }

  placeBlock(pos, key, scale = 0.1) {
    const block = this.physics.add.sprite(0, 0, key);
    this.blockGrid.placeAtIndex(pos, block);
    this.brickGroup.add(block);
    block.setImmovable();
    Align.scaleToGameW(block, scale, this);
  }

  placedoorHalf() {
    this.doorHalf1 = this.physics.add.sprite(0, 0, 'ground4');
    this.doorHalf2 = this.physics.add.sprite(0, 0, 'ground4');
    this.doorHalf3 = this.physics.add.sprite(0, 0, 'ground4');
    this.doorHalf4 = this.physics.add.sprite(0, 0, 'ground4');
    this.blockGrid.placeAtIndex(77, this.doorHalf1);
    this.brickGroup.add(this.doorHalf1);
    this.doorHalf1.setImmovable();
    Align.scaleToGameW(this.doorHalf1, 0.075, this);
    this.blockGrid.placeAtIndex(197, this.doorHalf2);
    this.brickGroup.add(this.doorHalf2);
    this.doorHalf2.setImmovable();
    Align.scaleToGameW(this.doorHalf2, 0.075, this);
    this.blockGrid.placeAtIndex(317, this.doorHalf3);
    this.brickGroup.add(this.doorHalf3);
    this.doorHalf3.setImmovable();
    Align.scaleToGameW(this.doorHalf3, 0.075, this);
    this.blockGrid.placeAtIndex(437, this.doorHalf4);
    this.brickGroup.add(this.doorHalf4);
    this.doorHalf4.setImmovable();
    Align.scaleToGameW(this.doorHalf4, 0.075, this);
  }

  placedoorEnd() {
    this.doorEnd1 = this.physics.add.sprite(0, 0, 'ground4');
    this.doorEnd2 = this.physics.add.sprite(0, 0, 'ground4');
    this.blockGrid.placeAtIndex(116, this.doorEnd1);
    this.brickGroup.add(this.doorEnd1);
    this.doorEnd1.setImmovable();
    Align.scaleToGameW(this.doorEnd1, 0.075, this);
    this.blockGrid.placeAtIndex(236, this.doorEnd2);
    this.brickGroup.add(this.doorEnd2);
    this.doorEnd2.setImmovable();
    Align.scaleToGameW(this.doorEnd2, 0.075, this);
  }

  makeUi() {
    super.makeSoundPanel();
    super.makeGear();

    this.scoreLabel = this.add.text(20, 20, 'Score: 0', {
      font: '25px Arial',
      fill: 'white',
    });

    this.placeAtIndex(0, this.scoreLabel);
    this.scoreLabel.setScrollFactor(0);

    this.clock = new Clock({
      scene: this,
      callback: this.timeUp.bind(this),
    });
    this.placeAtIndex(9, this.clock);
    this.clock.setClock(300);
    this.clock.startClock();
    this.clock.setScrollFactor(0);
  }

  // eslint-disable-next-line class-methods-use-this
  timeUp() {
    this.gameOver(false);
  }

  inkColliders(shoot) {
    this.physics.add.collider(shoot, this.dolphinsGroup, (shoot, dolphin) => {
      shoot.destroy();
      dolphin.destroy();
      this.mm.playSound('enemy_death');
      this.scorePoints += 10;
      this.scoreLabel.text = `Score: ${this.scorePoints}`;
    });
    this.physics.add.collider(shoot, this.jellysGroup, (shoot, jelly) => {
      shoot.destroy();
      jelly.destroy();
      this.mm.playSound('enemy_death');
      this.scorePoints += 15;
      this.scoreLabel.text = `Score: ${this.scorePoints}`;
    });
    this.physics.add.collider(shoot, this.whalesGroup, (shoot, whale) => {
      shoot.destroy();
      if (whale.gotHit()) {
        whale.destroy();
        this.mm.playSound('enemy_death');
        this.scorePoints += 80;
        this.scoreLabel.text = `Score: ${this.scorePoints}`;
      } else {
        this.mm.playSound('enemy_hit');
      }
    });
    this.physics.add.collider(shoot, this.agroFishesGroup, (shoot, agro) => {
      shoot.destroy();
      if (agro.gotHit()) {
        agro.destroy();
        this.mm.playSound('enemy_death');
        this.scorePoints += 45;
        this.scoreLabel.text = `Score: ${this.scorePoints}`;
      } else {
        this.mm.playSound('enemy_hit');
      }
    });
    this.physics.add.collider(shoot, this.seaHorsesGroup, (shoot, horse) => {
      shoot.destroy();
      horse.destroy();
      this.mm.playSound('enemy_death');
      this.scorePoints += 15;
      this.scoreLabel.text = `Score: ${this.scorePoints}`;
    });
    this.physics.add.collider(shoot, this.lever, () => {
      this.lever.anims.play('leverDown');
      this.doorEnd1.destroy();
      this.doorEnd2.destroy();
      shoot.destroy();
    });
    this.physics.add.collider(shoot, this.lever2, () => {
      this.lever2.anims.play('leverDown');
      this.doorHalf1.destroy();
      this.doorHalf2.destroy();
      this.doorHalf3.destroy();
      this.doorHalf4.destroy();
      shoot.destroy();
    });
    this.physics.add.collider(shoot, this.brickGroup, (shoot) => {
      shoot.destroy();
    });
  }

  lightColliders(agroFish, light) {
    this.mm.playSound('enemy_shoot');
    this.physics.add.collider(light, this.player, () => { this.gameOver(false); });
    this.time.addEvent({
      delay: 1000,
      callback: () => {
        if (agroFish.body) {
          if (agroFish.body.velocity.x > 0) {
            agroFish.anims.play('agroright', true);
          } else {
            agroFish.anims.play('agroleft', true);
          }
        }
      },
      callbackScope: this,
      loop: false,
    });
    this.time.addEvent({
      delay: 3000,
      callback: () => {
        agroFish.shootAgain();
        light.destroy();
      },
      callbackScope: this,
      loop: false,
    });
  }

  bubbleColliders(horse, bubble) {
    this.mm.playSound('enemy_shoot');
    this.physics.add.collider(bubble, this.player, () => { this.gameOver(false); });
    this.time.addEvent({
      delay: 3000,
      callback: () => {
        horse.shootAgain();
        bubble.destroy();
      },
      callbackScope: this,
      loop: false,
    });
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.moveLeft();
    } else if (this.cursors.right.isDown) {
      this.player.moveRight();
    } else {
      this.player.setVelocityX(0);

      this.player.anims.play('turn');
      this.cursors.up.getDuration();
    }

    if (this.player.body.touching.down) {
      this.player.setData('dbJump', true);
    }

    if (this.cursors.up.isDown && this.player.getData('dbJump')) {
      this.player.jump(this.cursors.up, this);
    }

    if (this.keySpace.isDown) {
      if (this.cursors.left.timeDown > this.cursors.right.timeDown) {
        if ((this.player.getData('inkTime') + 300) < this.keySpace.timeDown) {
          const ink = new Ink(this, (this.player.x), this.player.y, 'ink');
          ink.inkLeft();
          this.inkColliders(ink);
          ink.inkAnimation();
          this.player.setData('inkTime', this.keySpace.timeDown);
        }
      } else if ((this.player.getData('inkTime') + 300) < this.keySpace.timeDown) {
        const ink = new Ink(this, (this.player.x), this.player.y, 'ink');
        ink.inkRight();
        this.inkColliders(ink);
        ink.inkAnimation();
        this.player.setData('inkTime', this.keySpace.timeDown);
      }
    }

    this.dolphinsGroup.getChildren().forEach((dolphin) => {
      if (dolphin.body.touching.right || dolphin.body.blocked.right) {
        dolphin.moveLeft();
      } else if (dolphin.body.touching.left || dolphin.body.blocked.left) {
        dolphin.moveRight();
      }
    }, this);

    this.whalesGroup.getChildren().forEach((whale) => {
      if (whale.body.touching.right || whale.body.blocked.right) {
        whale.moveLeft();
      } else if (whale.body.touching.left || whale.body.blocked.left) {
        whale.moveRight();
      }
    }, this);

    this.jellysGroup.getChildren().forEach((jelly) => {
      if (jelly.body.touching.up || jelly.body.blocked.up) {
        jelly.moveDown();
      } else if (jelly.body.touching.down || jelly.body.blocked.down) {
        jelly.moveUp();
      }
    }, this);

    this.agroFishesGroup.getChildren().forEach((agro) => {
      if (agro.body.touching.right || agro.body.blocked.right) {
        agro.moveLeft();
      } else if (agro.body.touching.left || agro.body.blocked.left) {
        agro.moveRight();
      }
      if ((agro.x - this.player.x > -500) && (agro.x - this.player.x < 500)) {
        if (agro.getData('shoot')) {
          agro.shootDone();
          const light = new Light(this, (agro.x), agro.y, 'light');
          if (agro.x - this.player.x < 0) {
            agro.anims.play('shootright', true);
            light.boltRight();
          } else {
            agro.anims.play('shootleft', true);
            light.boltLeft();
          }
          this.lightColliders(agro, light);
        }
      }
    }, this);

    this.seaHorsesGroup.getChildren().forEach((horse) => {
      if (horse.body.touching.right || horse.body.blocked.right) {
        horse.moveLeft();
      } else if (horse.body.touching.left || horse.body.blocked.left) {
        horse.moveRight();
      }
      if ((horse.x - this.player.x > -500) && (horse.x - this.player.x < 500)) {
        if (horse.getData('shoot')) {
          horse.shootDone();
          const bubble = new Bubble(this, (horse.x), (horse.y), 'bubble');
          Align.scaleToGameW(bubble, 0.015, this);
          if (horse.x - this.player.x < 0) {
            bubble.bubbleRight();
          } else {
            bubble.bubbleLeft();
          }
          this.bubbleColliders(horse, bubble);
        }
      }
    }, this);
  }
}