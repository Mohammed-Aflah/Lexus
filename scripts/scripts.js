let prev_btn = document.querySelector("#prev");
let next_btn = document.querySelector("#next");
let img = document.getElementById("main_img");
var c = 0;
prev_btn.addEventListener("click", () => {
  if (c == 0) {
    img.src = "./images/carousel_img_2.avif";

    c = 1;
    return;
  } else {
    img.src = "./images/First_bg.avif";
    c = 0;
  }
});
next_btn.addEventListener("click", () => {
  if (c == 0) {
    img.src = "./images/carousel_img_2.avif";

    c = 1;
    return;
  } else {
    img.src = "./images/First_bg.avif";
    c = 0;
  }
});
