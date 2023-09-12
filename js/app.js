let dropMenu = document.querySelector(".burger__menu");
let dropMenuInner = document.querySelector(".drop__menu");

dropMenu.addEventListener("click", function () {
  if (dropMenuInner.style.display === "none") {
    dropMenuInner.style.display === "flex";
  } else {
    dropMenuInner.style.display === "none";
  }
});
