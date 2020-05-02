console.log("loaded script.js");

hideAllImages();
document.getElementById("i1-img").style.display = "block";

function hideAllImages() {
  console.log("hiding all items!");
  let items = document.getElementsByClassName("item-img");
  console.log("items= ", items);
  for (var i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }
}

function hover1(event) {
  hideAllImages();
  let itemToShow = document.getElementById("i1-img");
  itemToShow.style.display = "block";
}

function hover2(event) {
  hideAllImages();
  let itemToShow = document.getElementById("i2-img");
  itemToShow.style.display = "block";
}

function hover3(event) {
  hideAllImages();
  let itemToShow = document.getElementById("i3-img");
  itemToShow.style.display = "block";
}

function hover4(event) {
  hideAllImages();
  let itemToShow = document.getElementById("i4-img");
  itemToShow.style.display = "block";
}

function hover5(event) {
  hideAllImages();
  let itemToShow = document.getElementById("i5-img");
  itemToShow.style.display = "block";
}
