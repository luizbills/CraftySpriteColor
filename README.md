# SpriteColor for CraftyJS
A CraftyJS component to change the color of a sprite. 
Idea of this [topic](http://www.html5rocks.com/en/tutorials/casestudies/onslaught/).

***

##Demo
```javascript
Crafty.sprite(16, "http://craftyjs.com/demos/tutorial/sprite.png", {player:[0,3]});

Crafty.modules({ SpriteColor: 'RELEASE' }, function () {
Crafty.e("2D, Canvas, player, SpriteColor")
    .spriteColor("rgba(255, 0, 0, 0.5)") // red with 50% transparency
});
```

***

##License

Dual licensed under MIT and GPL.