// let dropMenu = document.querySelector(".burger__menu");
const dropMenuInner = document.querySelector(".drop__menu");
// const dropCartImg = document.querySelector(".cart__img");
const dropCart = document.querySelector(".cart");
const headerTopline = document.querySelector(".header__topline");

headerTopline.addEventListener("click", (e) => {
  // e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains("burger__menu")) {
    if (dropMenuInner.style.display === "flex") {
      dropMenuInner.style.display = "none";
    } else {
      dropMenuInner.style.display = "flex";
      dropCart.style.display = "none";   

    }
  }

  if (e.target.classList.contains("cart__img")) {
    if (dropCart.style.display === "block") {
      dropCart.style.display = "none";   
    } else {
      dropCart.style.display = "block";
      dropMenuInner.style.display = "none";
    }
    // e.stopPropagation();
  }
});




// dropMenu.addEventListener("click", () => {
//   if (dropMenuInner.style.display === "flex") {
//     dropMenuInner.style.display = "none";
//   } else {
//     dropMenuInner.style.display = "flex";
//   }
// });
