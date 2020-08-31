/* eslint-disable */
export class Background {
    constructor(config) {
       
        this.scene = config.scene;
        let game = this.scene.sys.game;
        var back = this.scene.add.image(game.config.width / 2, game.config.height / 2, config.key);
        back.displayWidth = game.config.width;
        back.displayHeight = game.config.height;
    }
}