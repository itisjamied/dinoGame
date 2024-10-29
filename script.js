const dino = document.getElementById("dino");
const obstacle = document.getElementById("obstacle");
let isJumping = false;

document.addEventListener("keydown", function (event) {
    if (event.key === " " && !isJumping) {
        jump();
    }
});

function jump() {
    if (isJumping) return;
    isJumping = true;
    dino.classList.add("jump");
    setTimeout(() => {
        dino.classList.remove("jump");
        isJumping = false;
    }, 500);
}

function checkCollision() {
    const dinoRect = dino.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
        dinoRect.right > obstacleRect.left &&
        dinoRect.left < obstacleRect.right &&
        dinoRect.bottom > obstacleRect.top &&
        dinoRect.top < obstacleRect.bottom
    ) {
        alert("Game Over!");
        location.reload();
    }
}

setInterval(checkCollision, 10);
