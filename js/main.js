var MyGame = MyGame || {};

var targetWidth = 840;//960; // 3:2
var targetHeight = 560;//640;

var newWidth = (window.innerWidth/window.innerHeight) * targetHeight;
var newHeight = targetHeight;

MyGame.game = new Phaser.Game(newWidth, newHeight, Phaser.AUTO, 'game');

console.log('Width' + window.innerWidth + 'Height' +  window.innerHeight + 'DPI' + window.devicePixelRatio);
MyGame.game.state.add('Preload', MyGame.Preload);
MyGame.game.state.add('GameOver', MyGame.GameOver);
MyGame.game.state.add('YouWin', MyGame.YouWin);
MyGame.game.state.add('Play', MyGame.Play);

MyGame.game.state.start('Preload');