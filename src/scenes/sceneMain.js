import { BaseScene } from './baseScene';
import { Align } from '../common/util/align';
import bgr1 from '../../assets/images/far.png';
import bgr2 from '../../assets/images/sand.png';
import bgr3 from '../../assets/images/foreground-1.png';
import bgr32 from '../../assets/images/foreground-2.png';
import ground1 from '../../assets/images/tiles-sand-coral.png';
import enWall from '../../assets/images/8bit-tile-sparkle-water-vert.png';
import hero from '../../assets/images/bobHero.png';
import dolp from '../../assets/images/dolphins.png';
import ink from '../../assets/images/inkOct.png';
import whale from '../../assets/images/bluewhaleLR.png';
import jelly from '../../assets/images/jelly.png';
import { AlignGrid } from '../common/util/alignGrid';
import {
  Player,
  Dolphin,
  Ink,
  Whale,
  Jelly,
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
    this.load.image('enWall', enWall);
    this.load.spritesheet('hero', hero, { frameWidth: 43, frameHeight: 48 });
    this.load.spritesheet('dolphin', dolp, { frameWidth: 64, frameHeight: 30 });
    this.load.spritesheet('ink', ink, { frameWidth: 17, frameHeight: 15 });
    this.load.spritesheet('whale', whale, { frameWidth: 64, frameHeight: 33 });
    this.load.spritesheet('jelly', jelly, { frameWidth: 28, frameHeight: 25 });
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
    // show numbers for layout and debugging
    //
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
    this.makeFloor(1200, 1319, 'ground1');
    this.physics.world.setBounds(0, 0,
      this.sys.game.config.width * 10, this.sys.game.config.height);

    // Enemy creations
    // create dolphin
    this.dolphinsGroup = this.physics.add.group();
    this.createDolphin(725);
    this.placeWall(723, 'enWall');
    this.placeWall(730, 'enWall');
    this.createDolphin(848);
    this.placeWall(845, 'enWall');
    this.placeWall(855, 'enWall');
    this.physics.add.collider(this.dolphinsGroup, this.enWallGroup);

    // create whales
    this.whalesGroup = this.physics.add.group();
    this.createWhale(367);
    this.placeWall(364, 'enWall');
    this.placeWall(370, 'enWall');
    this.physics.add.collider(this.whalesGroup, this.enWallGroup);

    // create jelly
    this.jellysGroup = this.physics.add.group();
  //  this.createJelly(67);
  //  this.placeWall(34, 'enWall');
  //  this.placeWall(30, 'enWall');
    this.physics.add.collider(this.jellyGroup, this.enWallGroup);

    // create main character
    this.player = new Player(this, 100, 450, 'hero');
    this.blockGrid.placeAtIndex(961, this.player);
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, this.brickGroup);
    this.physics.add.collider(this.player, this.dolphinsGroup, () => { this.gameOver(false); });
    this.physics.add.collider(this.player, this.whalesGroup, () => { this.gameOver(false); });
    this.player.animation();

    this.anims.create({
      key: 'ink',
      frames: this.anims.generateFrameNumbers('ink', { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1,
    });

    this.cameras.main.startFollow(this.player);

    //
    //
    this.blockGrid.showNumbers();
    this.makeUi();
    this.scorePoints = 0;
  }

  gameOver(finish) {
    this.mm.playSound('game_over');
    this.mm.background.stop();
    if (finish) {
      console.log('calculate points on time');
    } else {
      this.emitter.emit('STOP_TIME');
      console.log(this.scorePoints);
      this.scene.start('SceneLoad');
      // load sceneOver;
    }
  }

  createDolphin(place) {
    const dolph = new Dolphin(this, 0, 0, 'dolphin');
    this.dolphinsGroup.add(dolph);
    dolph.moveRight();
    this.blockGrid.placeAtIndex(place, dolph);
    dolph.animation();
    dolph.anims.play('dolright');
  }

  createWhale(place) {
    const whale = new Whale(this, 0, 0, 'whale');
    this.whalesGroup.add(whale);
    whale.moveRight();
    this.blockGrid.placeAtIndex(place, whale);
    Align.scaleToGameW(whale, 0.25, this);
    whale.body.setSize(whale.width, whale.height / 1.5, false);
    whale.animation();
    whale.anims.play('whaleright');
  }

  createJelly(place) {
    const jelly = new Jelly(this, 0, 0, 'jelly');
    this.jellysGroup.add(jelly);
    jelly.moveUp();
    this.blockGrid.placeAtIndex(place, whale);
//    Align.scaleToGameW(whale, 0.25, this);
//    whale.body.setSize(whale.width, whale.height / 1.5, false);
    jelly.animation();
    jelly.anims.play('jellymove');
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

  placeBlock(pos, key) {
    const block = this.physics.add.sprite(0, 0, key);
    this.blockGrid.placeAtIndex(pos, block);
    this.brickGroup.add(block);
    block.setImmovable();
    Align.scaleToGameW(block, 0.1, this);
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
    this.clock.setClock(600);
    this.clock.startClock();
    this.clock.setScrollFactor(0);
  }

  // eslint-disable-next-line class-methods-use-this
  timeUp() {
    // endGame by clock
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
    this.physics.add.collider(shoot, this.whalesGroup, (shoot, whale) => {
      shoot.destroy();
      if (whale.gotHit()) {
        whale.destroy();
        this.mm.playSound('enemy_death');
        this.scorePoints += 35;
        this.scoreLabel.text = `Score: ${this.scorePoints}`;
      } else {
        this.mm.playSound('enemy_hit');
      }
    });
    this.physics.add.collider(shoot, this.brickGroup, (shoot) => {
      shoot.destroy();
    });
  }

  inkAnimation(shoot) {
    shoot.anims.play('ink');
    this.mm.playSound('smb_bump');
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.moveLeft();

      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.moveRight();

      this.player.anims.play('right', true);
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
          this.inkAnimation(ink);
          this.player.setData('inkTime', this.keySpace.timeDown);
        }
      } else if ((this.player.getData('inkTime') + 300) < this.keySpace.timeDown) {
        const ink = new Ink(this, (this.player.x), this.player.y, 'ink');
        ink.inkRight();
        this.inkColliders(ink);
        this.inkAnimation(ink);
        this.player.setData('inkTime', this.keySpace.timeDown);
      }
    }

    this.dolphinsGroup.getChildren().forEach((dolphin) => {
      if (dolphin.body.touching.right || dolphin.body.blocked.right) {
        dolphin.moveLeft();
        dolphin.anims.play('dolleft', true);
      } else if (dolphin.body.touching.left || dolphin.body.blocked.left) {
        dolphin.moveRight();
        dolphin.anims.play('dolright', true);
      }
    }, this);

    this.whalesGroup.getChildren().forEach((whale) => {
      if (whale.body.touching.right || whale.body.blocked.right) {
        whale.moveLeft();
        whale.anims.play('whaleleft', true);
      } else if (whale.body.touching.left || whale.body.blocked.left) {
        whale.moveRight();
        whale.anims.play('whaleright', true);
      }
    }, this);

    this.jellysGroup.getChildren().forEach((jelly) => {
      if (jelly.body.touching.up || jelly.body.blocked.up) {
        jelly.moveDown();
      } else if (jelly.body.touching.down || jelly.body.blocked.down) {
        jelly.moveUp();
      }
    }, this);
  }
}