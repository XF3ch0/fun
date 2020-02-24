let word = "Hello";
game.splash("Hello World");
namespace SpriteKind {
    export const Asteroid = SpriteKind.create();
}

namespace asteroids {
    sprites.onCreated(SpriteKind.Asteroid, function (sprite: Sprite) {
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        setPosition(sprite, 10);
        setMotion(sprite);
    });

    game.onUpdateInterval(1500, function () {
        sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Asteroid);
    });

    function setMotion(asteroid: Sprite) {
        asteroid.vx = Math.randomRange(-8, 8);
        asteroid.vy = Math.randomRange(35, 20);
    }

    function setPosition(sprite: Sprite, edge: number) {
        sprite.x = Math.randomRange(edge, screen.width - edge);
        sprite.y = 0;
    }
}

let intro = "Hello! This is my Space Game!";

let name1: string = game.askForString("Give me a Name");

let number: number = 24 / 3 * 4;
let num: number = 18 * 6 + 4 / 2 - 1;
game.splash("" + num);