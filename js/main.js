const cats = {
  name: "Ella"
  // alt: "tabby cat in motion"
};
  // {name: "Legolas"}


let catName = document.getElementById("cat-name");
// let catName = document.querySelector(".catName");
catName.textContent = cats.name;

let catPic = document.getElementById("cat-pic");
    catPic.setAttribute("src", "img/ella-one.jpg");
    catPic.addEventListener("click", addClick, false);

let counter = document.getElementById("counter");
let clicks = 0;

// function getCatName(cats) {
  // cats.forEach(cat => )
// }
function addClick() {
  clicks++;
  counter.innerHTML = clicks;
}
