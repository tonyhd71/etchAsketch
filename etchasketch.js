let divContainer = document.getElementById("container");
const eachDiv = document.getElementsByClassName("divs");
let num = 16;
let inputSquareAmount;
let divWidth;
let divHeight;
let cell = [];
fillContainer();
function fillContainer() {
    for (let i = 1; i <= num*num; i++) { 
        let selectedDiv = document.createElement("div");
        divContainer.append(selectedDiv);
        divWidth = 960/num;
        divWidth = divWidth.toString();
        divWidth = divWidth + 'px';
        divHeight = divWidth;
    }
    const divList = document.querySelectorAll("#container div");
    //converting divs to Array
    const arrayDiv = Array.prototype.slice.call(divList);
    //arrayDiv.style.width = divWidth;
    const module16 = document.getElementsByClassName("divs");
    for (let i = 0; i < arrayDiv.length; i++) {
        arrayDiv[i].classList.add("divs");
        eachDiv[i].style.color = "white";
        arrayDiv[i].innerHTML = cell;
        arrayDiv[i].style.width = divWidth;
        arrayDiv[i].style.height = divHeight;
        arrayDiv[i].setAttribute('id', i +1);
        arrayDiv[i].classList.add(i);
        arrayDiv[i] = parseInt(arrayDiv[i].innerHTML);
        arrayDiv[i] = parseInt(arrayDiv[i].innerHTML);
        eachDiv[i].addEventListener("mouseleave", function (e) {
            this.style.backgroundColor = "red";
            this.style.color = "red";
        });
    if (parseInt(module16[i].id )% num == 0) {
        module16[i].classList.add("breakLine");
        const br = document.createElement("nobr");
        //Add a <br> after every element with a class name of breakline
        module16[i].insertAdjacentElement("afterend",br);
    }
    }
}
let clearButton = document.querySelector("button");
clearButton.addEventListener("click", numSquares);
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
