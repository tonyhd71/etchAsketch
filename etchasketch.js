let divContainer = document.getElementById("container");
for (let i = 0; i < 256; i++) {
    let selectedDiv = document.createElement("div");
    divContainer.append(selectedDiv);
}
//this is nodelist
const divList = document.querySelectorAll("#container div");
const modulo16 = [];
//converting using Array.prototype.slice.call
//const arrayDiv = Array.prototype.slice.call(divList);
/*
for (let i = 0; i < arrayDiv.length; i++) {
    arrayDiv[i].classList.add("divs");
    arrayDiv[i].innerHTML = i;
    //arrayDiv[i].toString();
    arrayDiv[i] = parseInt(arrayDiv[i]);
    //console.log(typeof(arrayDiv[i]));
    //console.log(parseInt(divList[i].innerHTML));
}
/*/
console.log(divList);
//make divs 16 x 16



    