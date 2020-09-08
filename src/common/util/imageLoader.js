/* eslint-disable */
export class ImageLoader {
    constructor(config) {
        this.scene = config.scene;
        this.callback = config.callback;
    }
    loadImage(key, path) {
        this.key = key;
        if (this.scene.textures.exists(key) == false) {
            this.scene.load.image(key, path);
            this.scene.load.once('complete', this.imageLoaded, this);
            this.scene.load.start();
        } else {
            if (this.callback) {
                this.callback(this);
            }
        }
    }
    imageLoaded() {
        if (this.callback) {
            this.callback(this);
        }
    }
}