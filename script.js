const gridBody = document.querySelector(".grid-body");
const resetBtn = document.querySelector(".reset");
const resizeBtn1 = document.querySelector(".resize-1");
const resizeBtn2 = document.querySelector(".resize-2");

let numOfSquares = 546;
window.addEventListener("load", function () {
  const gridSquare = this.document.createElement("div");
  loadSquares(546);
  const gridSquares = this.document.querySelectorAll(".grid-square");
  resetBtn.addEventListener("click", function () {
    console.log("yes");
    gridSquares.forEach((square) => {
      square.classList.remove("active");
    });
    resizeBtn1.disabled = false;
    resizeBtn2.disabled = false;
    gridBody.innerHTML = "";
    loadSquares(546);
  });

  resizeBtn1.addEventListener("click", function () {
    loadSquares(546);
    console.log(numOfSquares);
    resizeBtn1.disabled = true;
  });
  resizeBtn2.addEventListener("click", function () {
    loadSquares(1092);
    console.log(numOfSquares);
    resizeBtn2.disabled = true;
  });
});

function loadSquares(val) {
  // create a loop that creates an element and adds it to DOM as it loops
  for (let i = 0; i < val; i++) {
    const gridSquare = this.document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridBody.appendChild(gridSquare);
  }
  const gridSquares = this.document.querySelectorAll(".grid-square");
  // add event listener to grid square
  // add class active on hover
  gridSquares.forEach((square) => {
    square.addEventListener("mouseenter", function () {
      square.classList.add("active");
    });
  });
}
