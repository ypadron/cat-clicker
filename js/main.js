/******* model *******/
const cats = [
  {name: "Ella", photograph: "img/ella-one.jpg", description: "Blurry tabby cat with pink nose", clickCount: 0},
  {name: "Trouble", photograph: "img/trouble-one.jpg", description: "White cat resting after a hard day", clickCount: 0},
  {name: "Greta", photograph: "img/", desciption: "", clickCount: 0},
  {name: "Tigger", photograph: "img/", description: "", clickCount: 0},
  {name: "Indie", photograph: "img/indie-one.jpg", description: "Black cat napping in a decorative box", clickCount: 0}
];

/******* Octopus *******/
function initOctopus() {
  self.cats = cats;
  // set currentCat, initialize cat display view
  this.currentCat = cats[0];

  // initialize cat menu view
  fillCatMenuHTML();
  displayCat();
};

function getCurrentCat()  {
  return currentCat;
};

function setCurrentCat(cat)  {
  currentCat = cat;
};

function addClick() {
  currentCat.clickCount++;
  renderCat();
};

/******* Cat Menu List View1 init function *******/
let fillCatMenuHTML = (cats = self.cats) => {
  // Store DOM element to access later
  let catMenu = document.getElementById("cat-menu");
  cats.forEach(cat => {
    // Insert new elements (list items).
    catMenu.append(createCatMenuHTML(cat));
  });
};

/*** View1 - render function ***/
let createCatMenuHTML = (cat) => {
  // Create new element and store in a variable
  let li = document.createElement("li");
  // create text node and store in a variable
  let name = document.createElement("h3");
  name.innerHTML = cat.name;

  // Attach text to the element
  li.append(name);
  // Add list item click event
  li.addEventListener("click", (function(catCopy) {
      return function() {
        setCurrentCat(catCopy);
        renderCat();
      };
  })(cat));

  return li;
};

/** view2 - view 2 function **/
  function displayCat() {
    /** Create Display Area **/
    this.displayElem = document.getElementById("display-container");
    this.catName = document.getElementById("cat-name");
    this.catPic = document.getElementById("cat-pic");
    // Get DOM element for counter
    this.counter = document.getElementById("counter");

    this.catPic.addEventListener("click", function() {
        addClick();
    });

    this.renderCat();
  };

  function renderCat() {
    var currentCat = getCurrentCat();
    this.counter.textContent = currentCat.clickCount + " " + currentCat.name + " Clicks";
    this.catName.textContent = currentCat.name;
    this.catPic.src = currentCat.photograph;
    this.catPic.setAttribute("alt", currentCat.description);
  };

initOctopus();
