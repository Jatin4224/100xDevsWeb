//task- create a page with two images and a button.when the button is clicked,swao the source attribute of the image.
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let src1 = img1.src;
  let src2 = img2.src;

  img1.src = src2;
  img2.src = src1;
});
