let img = document.getElementById("myImage");
let imageSrc = img.getAttribute("src");
console.log(imageSrc);

let image = document.getElementById("carImage");
let button = document.getElementById("btn");
button.addEventListener("click", function () {
  image.src = "another-image.jpg";
});

let input = document.getElementById("myInput");
input.setAttribute("placeholder", "Enter your name");

let placeholders = document.getElementById("input");
let btn = document.getElementById("enable-btn");
btn.addEventListener("click", function () {
  placeholders.removeAttribute("disabled");
});

let para = document.getElementById("para");
let result = para.hasAttribute("class");
console.log(result);

let link = document.getElementById("link");
let linkBtn = document.getElementById("link-btn");
link.addEventListener("click", function () {
  link.setAttribute("href", "https://www.youtube.com/");
});
