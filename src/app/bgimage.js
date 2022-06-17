const images = ["img1.png","img2.png", "img3.png"];

const path = "./src/img/"; 

const randomNum = Math.floor(Math.random()*images.length);
const imgPath = `${path}${images[randomNum]}`;
document.body.style.backgroundImage =`url(${imgPath})`;

document.body.classList.add("bgImg");