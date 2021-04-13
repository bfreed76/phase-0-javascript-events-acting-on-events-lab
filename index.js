// Your code here

const dodger = document.getElementById("dodger");
const game = document.getElementById("game");

dodger.style.backgroundColor = "pink";
game.style.backgroundColor = 'blue';

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }};

   

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 255) {
        dodger.style.left = `${left +1}px`
    }
};

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } if (e.key === "ArrowRight") {
        moveDodger
    }
  }); 
          