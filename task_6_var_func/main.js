const btn = document.querySelector("button");

const imgs = document.querySelectorAll("img");

window.addEventListener("click", () => {
  imgs.forEach((item) => {
    item.classList.toggle("size");
  });
});
