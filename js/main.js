const cats = [
  {name: "Ella"},
  {name: "Trouble"}
];

let catName = document.getElementById("cat-name");
let catName2 = document.getElementById("cat-name2");
// let catName = document.querySelector(".catName");
catName.textContent = cats[0].name;
catName2.textContent = cats[1].name;

let catPic = document.getElementById("cat-pic");
    catPic.setAttribute("src", "img/ella-one.jpg");
    catPic.addEventListener("click", addClick, false);

let catPic2 = document.getElementById("cat-pic2");
    catPic2.setAttribute("src", "img/trouble-one.jpg");
    catPic2.setAttribute("alt", "white cat resting");
    catPic2.addEventListener("click", function()  {
      clicks2++;
      counter2.innerHTML = clicks2;
    }, false);

let counter = document.getElementById("counter");
let clicks = 0;

let counter2 = document.getElementById("counter2");
let clicks2 = 0;

// function getCatName(cats) {
  // cats.forEach(cat => )
// }
function addClick() {
  clicks++;
  counter.innerHTML = clicks;
};
