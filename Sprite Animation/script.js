const canvas = document.getElementById('gamecanvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.height = 1800;

const playerImage = new Image();
playerImage.src = 'sporty_boy.jpg';
const spriteWidth = 1020;
const spriteHeight = 1850;
let frameX = 0;
let frameY = 2;
let gameFrame = 0;
const staggerFrames = 12;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, frameX, frameY, spriteWidth, spriteHeight);
    if (gameFrame % staggerFrames == 0){
        if (frameX < 4) frameX++;
        else frameX = 0;
    }

    gameFrame++;
    requestAnimationFrame(animate);

};
animate();
