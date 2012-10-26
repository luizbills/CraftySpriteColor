# SpriteColor for CraftyJS
A CraftyJS component to change the color of a sprite. 
Idea of this [topic](http://www.html5rocks.com/en/tutorials/casestudies/onslaught/).

***

##Demo
```javascript
Crafty.sprite(16, "http://craftyjs.com/demos/tutorial/sprite.png", {player:[0,3]});

Crafty.modules({ SpriteColor: 'DEV' }, function () {
    Crafty.e("2D, Canvas, player, SpriteColor")
        .spriteColor("FF0000", 0.5) // red with 50% transparency
});
```

***

##License

Dual licensed under MIT and GPL.