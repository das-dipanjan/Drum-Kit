// document.querySelector("button").addEventListener("click", function () {
//     alert("I got Clicked");
// }); This is called anonymus function

//For Mouse Click
var n = 0;
while (n < document.querySelectorAll(".drum").length) {
    document.querySelectorAll(".drum")[n].addEventListener("click", function () {
        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
    n++;
}

//For Key Press
document.addEventListener("keydown", function(event) {
    makeSound (event.key);
    buttonAnimation(event.key);
});

//For Making Sound
function makeSound(key) {
    switch (key) {
        case "w":
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "a":
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "s":
            var tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;
        case "d":
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            alert ("!!Press a perfect key or click on a Perfect Button!!");
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}