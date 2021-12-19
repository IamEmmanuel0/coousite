//-------- slide image --------
var images = [
    'awka.jpg',
    'uli.jpg',
    'igbariam.jpg'
];
var back = document.querySelector(".header");

var i = 0;
var time = 3500;

function setImage() {
    back.style.backgroundImage = `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${images[i]})`;
}

function slideImg() {
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setImage();
    setTimeout('slideImg()', time);
}
window.onload = slideImg;


//-------- Toggle Menu hide & show --------
let hidebtn = document.querySelector("#hide");
let showbtn = document.querySelector("#show");
let nav = document.querySelector(".navs");

showbtn.addEventListener("click", () => {
    //    nav.style.right = '0px'
    nav.style.display = 'block'
});

hidebtn.addEventListener("click", () => {
    //    nav.style.right = '-200px'
    nav.style.display = 'none'
})





//------Ezehemmanuel62@gmail.com------
