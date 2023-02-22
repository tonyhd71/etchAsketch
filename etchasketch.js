let divContainer = document.getElementById("container");
for (let i = 0; i < 256; i++) {
    let selectedDiv = document.createElement("div");
    divContainer.append(selectedDiv);
}
//this is nodelist
const divList = document.querySelectorAll("#container div");
//converting using Array.prototype.slice.call
const arrayDiv = Array.prototype.slice.call(divList);
let nthNum = [];
const module16 = document.getElementsByClassName("divs");

for (let i = 0; i < arrayDiv.length; i++) {
    arrayDiv[i].classList.add("divs");
    arrayDiv[i].innerHTML = i;
    arrayDiv[i].setAttribute('id', i);
    //arrayDiv[i].classList.add(i);
    arrayDiv[i] = parseInt(arrayDiv[i].innerHTML);
    if (arrayDiv[i] % 16 == 0) {
        //const breakLine = document.querySelectorAll(".breakLine");
        module16[i].classList.add("breakLine");
        const breakLine = document.querySelectorAll("breakLine");
        const br = document.createElement("br");
        //trying to add a <br> after every element with a class name of breakline
        //breakLine[i].after(br);
        module16[i].insertAdjacentElement("afterend",br);
        //console.log(typeof(breakLine[i]));
        //console.log(breakLine);
    }
}
