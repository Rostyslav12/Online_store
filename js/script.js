$(document).ready(function () {
  $(".menu-burger__header").click(function () {
    $(".menu-burger__header").toggleClass("open-menu");
    $(".header__nav").toggleClass("open-menu");
    $("body").toggleClass("fixed-page");
  });
});

let offset = 0; // зміщення від лівого краю
const sliderLine = document.querySelector(".slider-line");

document.querySelector(".slider-next").addEventListener("click", function () {
  offset += 672;
  if (offset > 2688) offset = 0;
  sliderLine.style.left = -offset + "px";
});

document.querySelector(".slider-prev").addEventListener("click", function () {
  offset -= 672;
  if (offset < 0) offset = 2688;
  sliderLine.style.left = -offset + "px";
});
