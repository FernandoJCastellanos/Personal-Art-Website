


// EPISODE 4 FORK JAVASCRIPT

// FORK Player Java

document.querySelector("#youtubeFork").onclick = function() {

    const youtubePower = document.querySelector("#youtubeForkVideo");

    youtubePower.style.display = "block";

    };




// EPISODE 3 FIRE JAVASCRIPT

// FIRE Player Java

document.querySelector("#youtubeFire").onclick = function() {

    const youtubePower = document.querySelector("#youtubeFireVideo");

    youtubePower.style.display = "block";

    };





// EPISODE 2 LAB JAVASCRIPT

// Lab Player Java

    document.querySelector("#youtubeLab").onclick = function() {

    const youtubePower = document.querySelector("#youtubeLabVideo");

    youtubePower.style.display = "block";

    };






// EPISODE 1 POWER JAVASCRIPT

// Power Player Java

document.querySelector("#youtubePower").onclick = function() {

const youtubePower = document.querySelector("#youtubePowerVideo");

youtubePower.style.display = "block";

};








// Elements Selected

var powerBox = document.querySelector(".powerBox");
var powerText = document.querySelector(".powerText");
var labText = document.querySelector(".labText");
var fireText = document.querySelector(".fireText");
var forkText = document.querySelector(".forkText");


// Resize observer Set
const powerTextObserver = new ResizeObserver(entries =>{
const element = entries[0];
const elementHeightLog = element.contentRect.height;
powerText.style.height = elementHeightLog + "px";
labText.style.height = elementHeightLog + "px";
fireText.style.height = elementHeightLog + "px";
forkText.style.height = elementHeightLog + "px";
});

powerTextObserver.observe(powerBox);















 // window.onload = function() {
 //     if (window.jQuery) {
 //         // jQuery is loaded
 //         alert("Yeah!");
 //     } else {
 //         // jQuery is not loaded
 //         alert("Doesn't Work");
 //     }
 // }
