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
let br = document.createElement("br");
const module16 = document.getElementsByClassName("divs");
const breakLine = document.getElementsByClassName("breakLine");

for (let i = 0; i < arrayDiv.length; i++) {
    arrayDiv[i].classList.add("divs");
    arrayDiv[i].innerHTML = i;
    arrayDiv[i].setAttribute('id', i);
    arrayDiv[i].classList.add(i);
    arrayDiv[i] = parseInt(arrayDiv[i].innerHTML);
    if (arrayDiv[i] % 16 == 0) {
        console.log(arrayDiv[i] + " should equal " + typeof(module16[i].innerHTML));
        console.log(typeof(module16[16]));
       // insertAfter(br, )
       module16[i].classList.add("breakLine");
    }
}

//make divs 16 x 16

//just in case below backup
/*
for (let i = 0; i < arrayDiv.length; i++) {
    arrayDiv[i].classList.add("divs");
    arrayDiv[i].innerHTML = i;
    //arrayDiv[i].toString();
    arrayDiv[i] = parseInt(arrayDiv[i]);
    //console.log(typeof(arrayDiv[i]));
    //console.log(parseInt(divList[i].innerHTML));
}
if (arrayDiv[i] % 16 == 0) {
        console.log(arrayDiv[i]);
        br.after(".divs");
    }
/*/
    