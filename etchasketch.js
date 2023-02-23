let divContainer = document.getElementById("container");
let num = 16;
let inputSquareAmount;
fillContainer();
function fillContainer() {
    for (let i = 1; i <= num*num; i++) { 
        let selectedDiv = document.createElement("div");
        divContainer.append(selectedDiv);
    }
    const divList = document.querySelectorAll("#container div");
    //converting divs to Array
    const arrayDiv = Array.prototype.slice.call(divList);
    const module16 = document.getElementsByClassName("divs");
    for (let i = 0; i < arrayDiv.length; i++) {
        arrayDiv[i].classList.add("divs");
        arrayDiv[i].innerHTML = "A";
        arrayDiv[i].setAttribute('id', i +1);
        arrayDiv[i].classList.add(i);
        arrayDiv[i] = parseInt(arrayDiv[i].innerHTML);
        if (parseInt(module16[i].id )% num == 0) {
            module16[i].classList.add("breakLine");
            const breakLine = document.querySelectorAll("breakLine");
            const br = document.createElement("br");
            //Add a <br> after every element with a class name of breakline
            module16[i].insertAdjacentElement("afterend",br);
        }
    }
}
let clearButton = document.querySelector("button");
clearButton.addEventListener("mouseup", numSquares);
function numSquares() {
    inputSquareAmount = prompt("how many squares do you want?", num);
    inputSquareAmount = parseInt(inputSquareAmount);
    if (inputSquareAmount > 100) {
        alert("Please pick 100 or less");
    }
    divContainer.innerHTML = "";
    num = inputSquareAmount;
    fillContainer();
}
let divsInsideContainer = document.getElementsByClassName("divs");
function changeColor() {
    console.log("hm");
}
//divsInsideContainer.addEventListener("onclick", changeColor);
for (let i = 0; i < divsInsideContainer.length; i++) {
    divsInsideContainer[i].addEventListener("mouseenter", function (e) {
        this.style.backgroundColor = "red";
    });
}
