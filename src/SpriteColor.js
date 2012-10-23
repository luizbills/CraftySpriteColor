// create a canvas
var hiddenCanvas = document.createElement('canvas'),
// get the context 2d of this canvas
hiddenBuffer = hiddenCanvas.getContext("2d");
// hide it 
hiddenCanvas.style.display = "none";
document.getElementById("cr-stage").appendChild(hiddenCanvas);

// SpriteColor component
Crafty.c("SpriteColor", {
	_spriteColor: "rgba(0, 0, 0, 0)",
	spriteColor: function(color){
		this._spriteColor = color;
		return this;
	},
	_drawSpriteColor: function(){
		// sprite coordinates
		var co = this.__coord;
		// draw the sprite on hidden canvas
		hiddenBuffer.drawImage(this.img, //image element
		co[0], //x position on sprite
		co[1], //y position on sprite
		co[2], //width on sprite
		co[3], 0, 0, //height on sprite
		this._w, //width on canvas
		this._h //height on canvas
		);
		// Draw a rectangle over the sprite using a overlay
		hiddenBuffer.save();
		hiddenBuffer.globalCompositeOperation = "source-in";
		// paint the rectangle with a color
		hiddenBuffer.fillStyle = this._spriteColor;
		hiddenBuffer.fillRect(0, 0, this._w, this._h);
		hiddenBuffer.restore();
		// draw the hidden canvas on Crafty canvas
		Crafty.canvas.context.drawImage(hiddenCanvas, this._x, this._y);
	},
	init: function(){
		this.bind("Draw", this._drawSpriteColor);
		this.bind("RemoveComponent", function(c) {
			if (c == "SpriteColor") this.unbind("Draw", this._drawSpriteColor);
		})
	},
});

