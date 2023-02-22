let divContainer = document.getElementById("container");
for (let i = 1; i <= 256; i++) {
    let selectedDiv = document.createElement("div");
    divContainer.append(selectedDiv);
}
const divList = document.querySelectorAll("#container div");
//converting divs to Array
const arrayDiv = Array.prototype.slice.call(divList);
let nthNum = [];
const module16 = document.getElementsByClassName("divs");

for (let i = 0; i < arrayDiv.length; i++) {
    arrayDiv[i].classList.add("divs");
    arrayDiv[i].innerHTML = "make this box wider";
    arrayDiv[i].setAttribute('id', i +1);
    arrayDiv[i].classList.add(i);
    arrayDiv[i] = parseInt(arrayDiv[i].innerHTML);
    console.log(parseInt(module16[i].id));
    if (parseInt(module16[i].id )% 16 == 0) {
        module16[i].classList.add("breakLine");
        const breakLine = document.querySelectorAll("breakLine");
        const br = document.createElement("br");
        //Add a <br> after every element with a class name of breakline
        module16[i].insertAdjacentElement("afterend",br);
    }
}
