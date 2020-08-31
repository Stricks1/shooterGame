/* eslint-disable */
let instance = null;
export class EventDispatcher extends Phaser.Events.EventEmitter {
    constructor() {
        if (!instance) {
            super();
            instance = this;
        }
        return instance;
    }
    static getInstance() {
        if (!instance) {
            instance = new EventDispatcher();
        }
        return instance;
    }
}
export default EventDispatcher