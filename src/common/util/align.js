/* eslint-disable */
export class Align {
    static scaleToGameW(obj, per, scene) {
        obj.displayWidth = scene.game.config.width * per;
        obj.scaleY = obj.scaleX;
    }
    static scaleToGameH(obj, per, scene) {
        obj.displayHeight = scene.game.config.height * per;
        obj.scaleX = obj.scaleY;
    }
    static centerH(obj, scene) {
        obj.x = scene.game.config.width / 2 - obj.displayWidth / 2;
    }
    static centerV(obj, scene) {
        obj.y = scene.game.config.height / 2 - obj.displayHeight / 2;
    }
    static center2(obj, scene) {
        obj.x = scene.game.config.width / 2 - obj.displayWidth / 2;
        obj.y = scene.game.config.height / 2 - obj.displayHeight / 2;
    }
    static center(obj, scene) {
        obj.x = scene.game.config.width / 2;
        obj.y = scene.game.config.height / 2;
    }
    static centerX(scene) {
        return scene.game.config.width / 2;
    }
    static getYPer(scene, per) {
        return scene.game.config.height * per;
    }
    static getXPer(scene, per) {
        return scene.game.config.width * per;
    }
    static scaleImageToSize(image, sizeX, sizeY) {
        var scaleWidth = sizeX / image.width;
        var scaleHeight = sizeY / image.height;
        var scale = scaleWidth;
        if (scale > scaleHeight) scale = scaleHeight;
        image.setScale(scale);
    }
    static scaleImageToWidth(image, sizeX) {
        var scaleWidth = sizeX / image.width;
        var scale = scaleWidth;
        image.setScale(scale);
    }
    static alignToTopLeft(obj) {
        obj.x = obj.displayWidth / 2;
        obj.y = obj.displayHeight / 2;
    }
    static alignToTopRight(obj,scene) {
        obj.x = scene.sys.game.config.width - obj.displayWidth / 2;
        obj.y = obj.displayHeight / 2;
    }
    static alignToLBottomLeft(obj,scene) {
        obj.x = obj.displayWidth / 2;
        obj.y = scene.sys.game.config.height - obj.displayHeight / 2;
    }
    static alignToLBottomRight(obj,scene) {
        obj.x = scene.game.config.width - obj.displayWidth / 2;
        obj.y = scene.game.config.height - obj.displayHeight / 2;
    }
}