import {
    UIBlock
} from "../ui/uiblock.js";
import {
    TextObj
} from "../ui/textObj";
import {
    EventDispatcher
} from "../mc/eventDispatcher";
import {Model} from "../mc/model";

import {TextStyles} from "../ui/textStyles";

export class ScoreBox extends UIBlock {
    constructor(config) {
        super();
        this.scene = config.scene;
        this.emitter = EventDispatcher.getInstance();
        let textStyles=TextStyles.getInstance();
        this.model=Model.getInstance();

        //
        if (!config.textStyle) {
            config.textStyle = textStyles.getStyle("SCORE");
        }
        this.text1 = new TextObj({
            scene: this.scene,
            text: "SCORE:0",
            textStyle: config.textStyle
        });
        this.add(this.text1);
        this.emitter.on("SCORE_UPDATED",this.scoreUpdated.bind(this));
        
    }
    setScore(score)
    {
        this.model.score=score;
    }
    upScore(points)
    {
        let s=model.score+points;
        this.model.score=s;
    }
    scoreUpdated() {
        this.text1.setText("SCORE:" + this.model.score);
    }
}