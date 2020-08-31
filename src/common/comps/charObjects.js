/* eslint-disable no-undef */
/* eslint-disable max-classes-per-file */
// eslint-disable-next-line import/prefer-default-export
export class CharObject extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);

    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.setData('isAgro', false);
    this.setData('isDead', false);
  }
}

export class Player extends CharObject {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);

    this.setData('speed', 200);
    this.setData('speedJump', 300);
    this.setData('dbJump', true);
    this.setData('jumping', false);
    this.setData('jumpTime', 0);
    this.setGravityY(250);
  }

  moveLeft() {
    this.body.velocity.x = -this.getData('speed');
  }

  moveRight() {
    this.body.velocity.x = this.getData('speed');
  }

  jump(cursorUp) {
    if (this.getData('jumpTime') !== cursorUp.timeDown) {
      this.setData('jumping', false);
    }
    if (!this.body.touching.down && ((this.getData('jumpTime') + 50) < cursorUp.timeDown)) {
      this.setData('dbJump', false);
    }
    this.setData('jumpTime', cursorUp.timeDown);
    if (!this.getData('jumping')) {
      this.body.velocity.y = -this.getData('speedJump');
    }
    this.setData('jumping', true);
  }
}

export class Dolphin extends CharObject {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);

    this.setData('speed', 120);
  }

  moveLeft() {
    this.body.velocity.x = -this.getData('speed');
  }

  moveRight() {
    this.body.velocity.x = this.getData('speed');
  }
}