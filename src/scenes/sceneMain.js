import {
    BaseScene
} from "./baseScene";
import {
    Align
} from "../common/util/align";
import {FormUtil} from "../common/util/formUtil";
//
//
//
export class SceneMain extends BaseScene {
    constructor() {
        super('SceneMain');
    }
    preload() {}
    create() {
        //set up the base scene
        super.create();
        //set the grid for the scene
        this.makeAlignGrid(11, 11);
        //show numbers for layout and debugging 
        //
        this.aGrid.showNumbers();
        //
        //
        //
        this.makeUi();     
    }
   
    makeUi() {
        super.makeSoundPanel();
        super.makeGear();
    }
    update() {}
}