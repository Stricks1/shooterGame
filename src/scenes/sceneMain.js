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
import { AlignGrid } from '../common/util/alignGrid';
import { Player, Dolphin } from '../common/comps/charObjects';

//
//
//

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
    this.cursors = this.input.keyboard.createCursorKeys();
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

    this.placeWall(845, 'enWall');
    this.placeWall(855, 'enWall');

    // create first enemy
    this.dolphinsGroup = this.physics.add.group();
    this.dolph1 = new Dolphin(this, 200, 350, 'dolphin');
    this.dolphinsGroup.add(this.dolph1);
    this.dolph1.moveRight();
    this.blockGrid.placeAtIndex(848, this.dolph1);

    this.anims.create({
      key: 'dolright',
      frames: this.anims.generateFrameNumbers('dolphin', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'dolleft',
      frames: this.anims.generateFrameNumbers('dolphin', { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });

    this.dolph1.anims.play('dolright', true);
    this.physics.add.collider(this.dolphinsGroup, this.enWallGroup);

    // create main character
    this.player = new Player(this, 100, 450, 'hero');
    this.blockGrid.placeAtIndex(961, this.player);
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, this.brickGroup);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 1 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'hero', frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('hero', { start: 2, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.cameras.main.startFollow(this.player);

    //
    //
    this.blockGrid.showNumbers();
    this.makeUi();
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

    this.dolphinsGroup.getChildren().forEach((dolphin) => {
      if (dolphin.body.touching.right || dolphin.body.blocked.right) {
        dolphin.moveLeft();
        dolphin.anims.play('dolleft', true);
      } else if (dolphin.body.touching.left || dolphin.body.blocked.left) {
        dolphin.moveRight();
        dolphin.anims.play('dolright', true);
      }
    }, this);
  }
}