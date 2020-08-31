import {
    BaseScene
} from "./baseScene";
import {
    FlatButton
} from "../common/ui/flatButton";
import {
    TextStyles
} from "../common/ui/textStyles";
import {
    ToggleButton
} from "../common/ui/toggleButton";
import {
    Align
} from "../common/util/align";

//
//
//
export class SceneTitle extends BaseScene {
    constructor() {
        super('SceneTitle');
    }
    preload() {
        super.preload();
    }
    create() {
        super.create();
        //
        //
        // uncomment to turn on music
        // this.mm.setBackgroundMusic("backgroundMusic");
        //
        this.setBackground('sky');
        //
        //
        this.makeAlignGrid(11, 11);
       // this.aGrid.showNumbers();
        //
        //
        //
      //  this.placeImage('title', 27, .8);
        this.placeText("Game Title",27,"TITLE_TEXT");
        //
        //
        //
      //  let buttonStyle = this.textStyles.getStyle(TextStyles.BUTTON_STYLE);
        let btnNext = new FlatButton({
            scene: this,
            textStyle: 'BUTTON_STYLE',
            key: "button",
            text: "START GAME",
            callback: this.startGame.bind(this)
        });
        this.aGrid.placeAtIndex(104, btnNext);
        //
        //
        //
        //
        //
        //
        this.makeUi();
        // this.placeText("Test Me!!",49,"frost");
    }
    makeUi() {
        super.makeSoundPanel();
        super.makeGear();
    }
    startGame() {
        this.scene.start("SceneMain");
    }
    update() {}
}