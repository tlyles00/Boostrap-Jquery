let thisBox;
let newBorder;

allColors = ["red", "green", "blue", "yellow", "purple", "gold", "orange", "teal"];
allBorders = ["dotted", "solid", "double", "groove", "indet", "outset", "ridge"]

function changeButton(id) {
 thisBox = document.getElementById(id);
 thisBox.style.background = allColors[Math.floor(Math.random() * allColors.length)];
 newBorder = allBorders[Math.floor(Math.random() * allBorders.length)] + " 5px " + 
 allColors[Math.floor(Math.random() * allColors.length)]
 thisBox.style.border = newBorder;
}

function hideButton (id) {
    thisBox = document.getElementById(id);

    if (thisBox.style.display == "none") {
        thisBox.style.display = "block";
    }
    else {
    thisBox.style.display = "none"; 
    }
}

function resetColors( id1, id2, id3) {
    let firstBox = document.getElementById(id1);
    let secondBox = document.getElementById(id2);
    let thirdBox = document.getElementById(id3);

    firstBox.style.removeProperty("background");
    secondBox.style.removeProperty("background");
    thirdBox.style.removeProperty("background");
    firstBox.style.removeProperty("border");
    secondBox.style.removeProperty("border");
    thirdBox.style.removeProperty("border");

}
