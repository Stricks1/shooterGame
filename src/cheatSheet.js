//set up the base scene
super.create();
//set the grid for the scene
this.makeAlignGrid(11, 11);
//show numbers for layout and debugging 
//
this.aGrid.showNumbers();
//
//
//set background
//
//this.setBackground(key);
this.setBackground('sky');
//
//
//add a image
//
//this.placeImage(key,grid_number,percentage_of_screen_width)
this.placeImage('key', 60, .5)
//
//
//add text
//
//this.placeText(text,grid_number,text_style);
this.placeText('myText', 60, 'myStyle');
//
//
//add text style
//this.textStyles.regSimple(key, color, fontSize, font)
this.textStyles.regSimple("SCORE", "#ffff00", TextStyles.SIZE_LARGE, "Impact");
//add avanced text sytle
//this.textStyles.regAdvanced(key, color, fontSize, font, stroke, strokeThick, shadow)
//
this.textStyles.regAdvanced("SCORE2", "#ffff00", TextStyles.SIZE_LARGE, "Impact", "#00ff00", 4, "#ffffff");
//
//
//Add sound control panel
super.makeSoundPanel();
super.makeGear();
//
//
//flat button
//
let btnNext = new FlatButton({
    scene: this,
    textStyle: 'BUTTON_STYLE',
    key: "button",
    text: "START GAME",
    callback: this.startGame.bind(this)
});
//toggle button
//
let btnMusic = new ToggleButton({
    scene: this.scene,
    backKey: 'toggle2',
    onIcon: 'onIconKey',
    offIcon: 'offIconKey',
    event: 'TOGGLE_MUSIC',
    scale: .2,
    value: true,
    x: 0,
    y: 0
});
//game width and height
//the game width and height are stored in
//this.gw and this.gh after super is called;
//You can use this to position objects
image.x = this.gw / 2;
image.y = this.gh / 2;
//Align Grid
//an align grid is built into the base scene
//to place an existing item on the grid.
//this.placeAt(pos,item);
//
this.placeAt(60, image);
//
//
//basic effects
//
let colorStars = new ColorBurst({
    scene: this,
    x: pointer.x,
    y: pointer.y
});
//f is frame number of the sprite sheet
let stars = new StarBurst({
    scene: this,
    x: pointer.x,
    y: pointer.y,
    f: 1,
    tint: 0xffcc00
});
let ripple = new Ripple({
    scene: this,
    x: pointer.x,
    y: pointer.y
});
let sparks = new Sparks({
    scene: this,
    x: pointer.x,
    y: pointer.y,
    size: 1,
    count: 25
});
//clock
//
this.clock = new Clock({
    scene: this
})
this.placeAtIndex(38, this.clock);
//
//scorebox
//
this.sb = new ScoreBox({
    scene: this
});
this.placeAtIndex(27, this.sb);
//
//set the score
//
this.eventDispatcher.emit("SET_SCORE", 100);
//
//up the score
//
this.eventDispatcher.emit("UP_POINTS", 1);
//
//
//
//clock
//
this.clock = new Clock({
    scene: this
})
this.placeAtIndex(38, this.clock);
//
//
//clock events
//
//
this.eventDispatcher.emit("SET_TIME", 60);
this.eventDispatcher.emit("ADD_TIME", 1);
this.eventDispatcher.emit("STOP_TIME");
this.eventDispatcher.emit("START_TIME");
this.eventDispatcher.emit("RESET_TIME");
//
//bar for health, power or prograss
//
this.bar = new Bar({
    scene: this,
    height: 100,
    width: 300,
    color: 0xffffff
});
this.bar.setPercent(25);
//
//
//form elements
//
//place form elements in your html with the display set to none
//form elements must have a set width
// <input id="input1" type="text" style="display: none; width: 200px" />
//
//Align elements with the FormUtil class
//
//
this.forms = new FormUtil({
    scene: this
});
this.forms.showNumbers();
this.forms.placeElementAt(12, 'input1');
this.forms.showElement('input1');