/* eslint-disable no-undef */
/* eslint-disable max-classes-per-file */
// eslint-disable-next-line import/prefer-default-export

export class CharObject extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);

    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
  }
}

export class Ink extends CharObject {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);

    this.setData('speed', 320);
    this.setGravityY(50);
  }

  inkLeft() {
    this.body.velocity.x = -this.getData('speed');
  }

  inkRight() {
    this.body.velocity.x = this.getData('speed');
  }

  inkAnimation() {
    this.anims.play('ink');
    this.scene.mm.playSound('smb_bump');
  }

  animation() {
    this.scene.anims.create({
      key: 'ink',
      frames: this.scene.anims.generateFrameNumbers('ink', { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1,
    });
  }
}

export class Light extends CharObject {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);

    this.setData('speed', 320);
    this.setGravityY(0);
  }

  boltLeft() {
    this.body.velocity.x = -this.getData('speed');
  }

  boltRight() {
    this.body.velocity.x = this.getData('speed');
  }
}


export class Bubble extends CharObject {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);

    this.setData('speed', 300);
    this.setGravityY(0);
  }

  bubbleLeft() {
    this.body.velocity.x = -this.getData('speed');
  }

  bubbleRight() {
    this.body.velocity.x = this.getData('speed');
  }
}

export class Player extends CharObject {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    this.scene = scene;

    this.setData('speed', 200);
    this.setData('speedJump', 250);
    this.setData('dbJump', true);
    this.setData('jumping', false);
    this.setData('jumpTime', 0);
    this.setData('inkTime', 0);
    this.setGravityY(250);
  }

  moveLeft() {
    this.body.velocity.x = -this.getData('speed');
    this.anims.play('left', true);
  }

  moveRight() {
    this.body.velocity.x = this.getData('speed');
    this.anims.play('right', true);
  }

  jump(cursorUp, scene) {
    if (this.getData('jumpTime') !== cursorUp.timeDown) {
      this.setData('jumping', false);
    }
    if (!this.body.touching.down && ((this.getData('jumpTime') + 50) < cursorUp.timeDown)) {
      this.setData('dbJump', false);
    }
    this.setData('jumpTime', cursorUp.timeDown);
    if (!this.getData('jumping')) {
      this.body.velocity.y = -this.getData('speedJump');
      scene.mm.playSound('smw_jump');
    }
    this.setData('jumping', true);
  }

  animation() {
    this.scene.anims.create({
      key: 'left',
      frames: this.scene.anims.generateFrameNumbers('hero', { start: 0, end: 1 }),
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: 'turn',
      frames: [{ key: 'hero', frame: 4 }],
      frameRate: 20,
    });
    this.scene.anims.create({
      key: 'right',
      frames: this.scene.anims.generateFrameNumbers('hero', { start: 2, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
  }
}

export class Dolphin extends CharObject {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    this.scene = scene;

    this.setData('speed', 120);
  }

  moveLeft() {
    this.body.velocity.x = -this.getData('speed');
    this.anims.play('dolleft', true);
  }

  moveRight() {
    this.body.velocity.x = this.getData('speed');
    this.anims.play('dolright', true);
  }

  animation() {
    this.scene.anims.create({
      key: 'dolright',
      frames: this.scene.anims.generateFrameNumbers('dolphin', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: 'dolleft',
      frames: this.scene.anims.generateFrameNumbers('dolphin', { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });
  }
}


export class Whale extends CharObject {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    this.scene = scene;

    this.setData('speed', 80);
    this.setData('life', 3);
  }

  moveLeft() {
    this.body.velocity.x = -this.getData('speed');
    this.anims.play('whaleleft', true);
  }

  moveRight() {
    this.body.velocity.x = this.getData('speed');
    this.anims.play('whaleright', true);
  }

  gotHit() {
    let life = this.getData('life');
    life -= 1;
    this.setData('life', life);
    if (life === 0) {
      return true;
    }
    return false;
  }

  animation() {
    this.scene.anims.create({
      key: 'whaleright',
      frames: this.scene.anims.generateFrameNumbers('whale', { start: 0, end: 9 }),
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: 'whaleleft',
      frames: this.scene.anims.generateFrameNumbers('whale', { start: 10, end: 19 }),
      frameRate: 10,
      repeat: -1,
    });
  }
}


export class Jelly extends CharObject {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    this.scene = scene;

    this.setData('speed', 200);
  }

  moveUp() {
    this.body.velocity.y = -this.getData('speed');
    this.anims.play('jellymove', true);
  }

  moveDown() {
    this.body.velocity.y = this.getData('speed');
  }

  animation() {
    this.scene.anims.create({
      key: 'jellymove',
      frames: this.scene.anims.generateFrameNumbers('jelly', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
  }
}

export class AgroFish extends CharObject {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    this.scene = scene;

    this.setData('speed', 180);
    this.setData('life', 2);
    this.setData('shoot', true);
  }

  shootAgain() {
    this.setData('shoot', true);
  }

  shootDone() {
    this.setData('shoot', false);
  }

  moveLeft() {
    this.body.velocity.x = -this.getData('speed');
    this.anims.play('agroleft', true);
  }

  moveRight() {
    this.body.velocity.x = this.getData('speed');
    this.anims.play('agroright', true);
  }

  gotHit() {
    let life = this.getData('life');
    life -= 1;
    this.setData('life', life);
    if (life === 0) {
      return true;
    }
    return false;
  }

  animation() {
    this.scene.anims.create({
      key: 'agroright',
      frames: this.scene.anims.generateFrameNumbers('agrofish', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: 'agroleft',
      frames: this.scene.anims.generateFrameNumbers('agrofish', { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: 'shootleft',
      frames: [{ key: 'agrofish', frame: 8 }],
      frameRate: 20,
      repeat: -1,
    });
    this.scene.anims.create({
      key: 'shootright',
      frames: [{ key: 'agrofish', frame: 9 }],
      frameRate: 20,
      repeat: -1,
    });
  }
}

export class SeaHorse extends CharObject {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    this.scene = scene;

    this.setData('speed', 130);
    this.setData('shoot', true);
  }

  shootAgain() {
    this.setData('shoot', true);
  }

  shootDone() {
    this.setData('shoot', false);
  }

  moveLeft() {
    this.body.velocity.x = -this.getData('speed');
    this.anims.play('seaHorseleft', true);
  }

  moveRight() {
    this.body.velocity.x = this.getData('speed');
    this.anims.play('seaHorseright', true);
  }

  animation() {
    this.scene.anims.create({
      key: 'seaHorseright',
      frames: this.scene.anims.generateFrameNumbers('seaHorse', { start: 0, end: 1 }),
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: 'seaHorseleft',
      frames: this.scene.anims.generateFrameNumbers('seaHorse', { start: 2, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
  }
}
