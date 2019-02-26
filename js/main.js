document.addEventListener("DOMContentLoaded", (event) => {
  self.cats = cats;
  fillCatMenuHTML();
});

const cats = [
  {name: "Ella", photograph: "img/ella-one.jpg", description: "Blurry tabby cat with pink nose"},
  {name: "Trouble", photograph: "img/trouble-one.jpg", description: "White cat resting after a hard day"},
  {name: "Geta", photograph: "", desciption: ""},
  {name: "Tigger", photograph: "", description: ""},
  {name: "Indie", photograph: "img/indie-one.jpg", description: "Black cat napping in a decorative box"}
];

let fillCatMenuHTML = (cats = self.cats) => {
  // Find position where element will be added.
  let catMenu = document.getElementById("cat-menu");
  cats.forEach(cat => {
    // Insert new elements (list items).
    catMenu.append(createCatMenuHTML(cat));
  });
};

let createCatMenuHTML = (cat) => {
  // Create new element and store in a variable
  let li = document.createElement("li");

  // create text node and store in a variable.
  let name = document.createElement("h3");
  name.innerHTML = cat.name;

  // Attach text to the element.
  li.append(name);
  li.addEventListener("click", displayCat, false);
  function displayCat() {
    /** Create Display Area **/
    let catName = document.getElementById("cat-name");

    // let catName = document.querySelector(".catName");
    catName.textContent = cat.name;

    let catPic = document.getElementById("cat-pic");
        catPic.src = cat.photograph;
        catPic.setAttribute("alt", cat.description);
        catPic.addEventListener("click", addClick, false);

    let counter = document.getElementById("counter");
    let clicks = 0;
    
    counter.textContent = clicks + " " + cat.name + " Clicks";

      function addClick() {
        clicks++;
        counter.textContent = clicks + " " + cat.name + " Clicks";
      };

      // counter.textContent = clicks + " " + cat.name + " Clicks";

  };

  return li;
};

/*
//** Create Display Area **
let catName = document.getElementById("cat-name");

// let catName = document.querySelector(".catName");
catName.textContent = cats[0].name;

let catPic = document.getElementById("cat-pic");
    catPic.src = cats[0].photograph;
    catPic.setAttribute("alt", "Blurry tabby cat with pink nose");
    catPic.addEventListener("click", addClick, false);

// let catPic2 = document.getElementById("cat-pic2");
    // catPic2.setAttribute("src", "img/trouble-one.jpg");
    // catPic2.setAttribute("alt", "white cat resting");
    // catPic2.addEventListener("click", function()  {
      // clicks2++;
      // counter2.innerHTML = clicks2;
    // }, false);

let counter = document.getElementById("counter");
let clicks = 0;

function addClick() {
  clicks++;
  counter.innerHTML = clicks;
};
 */
