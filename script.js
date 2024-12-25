let container = document.querySelector(".container");
let gridSize = 24;
const resetSize = document.querySelector("#size");
const reSize = document.querySelector("#resize");
reSize.addEventListener("click", () => {
  createGrid(gridSize);
});
function createGrid(gridSize) {
  container.innerHTML = ""; // Clear existing grid
  let totalGrid = gridSize * gridSize;
  for (let i = 1; i <= totalGrid; i++) {
    let newDiv = document.createElement("div");
    let h = 800 / gridSize; // Adjust size based on gridSize
    let hei = h + "px";
    newDiv.style.height = hei;
    newDiv.style.width = hei;
    newDiv.classList.add("grid");
    container.appendChild(newDiv);
  }
}

resetSize.addEventListener("click", () => {
  let newSize = Number(prompt("Grid Size (1-100)"));
  if (newSize >= 1 && newSize <= 100) {
    gridSize = newSize;
    createGrid(gridSize);
  } else {
    alert("Please enter a size between 1 and 100.");
  }
});

let isClicked = false;

// Track mouse state
window.addEventListener("mousedown", () => {
  isClicked = true;
});

window.addEventListener("mouseup", () => {
  isClicked = false;
});

// Add hover effect to grid cells
container.addEventListener("mouseover", (event) => {
  if (isClicked && event.target.classList.contains("grid")) {
    event.target.style.backgroundColor = "red";
  }
});

// Initial grid creation
createGrid(gridSize);
