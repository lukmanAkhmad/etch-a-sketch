let container = document.querySelector("#container");

function createSquare(numberOfDivToCreate) {
    // 600 comes from the width and height of the container
    let gridCellDimension = ((600 / numberOfDivToCreate) - 2).toFixed(2);
    let gridSize = Math.pow(numberOfDivToCreate, 2);

    while (gridSize > 0) {
        let divSquare = document.createElement("div");
        container.appendChild(divSquare);
        divSquare.classList.add("grid");
        divSquare.style.width = gridCellDimension + "px";
        divSquare.style.height = gridCellDimension + "px";
        divSquare.style.border = "1px solid black";

        gridSize--
    }
}

createSquare(16)