import { createElements, createElement } from "./utils.js";

const smileys = ["😢", "😞", "😐", "😀", "😎"],
  starsContainer = document.querySelector(".stars-container"),
  emojiContainer = document.querySelector(".emoji-container");
starsContainer.appendChild(
  createElements(
    5,
    (elementIndex) =>
      createElement("span", {
        class: "star star-empty",
        "data-index": elementIndex,
      }),
    1
  )
);

const stars = document.querySelectorAll(".star");
let rating;

starsContainer.addEventListener("click", onRated);
starsContainer.addEventListener("mouseover", onHover);
starsContainer.addEventListener("mouseleave", onLeave);

function updateStars(index) {
  if (stars[index - 1].classList.contains("star-filled")) {
    unRate(index);
  } else {
    rate(index);
  }
}

function onRated(event) {
  rating = +event.target.getAttribute("data-index");
    updateStars(rating);
  emojiContainer.textContent = smileys[rating - 1];
}

function onHover(event) {
  updateStars(+event.target.getAttribute("data-index"));
}

function onLeave() {
    updateStars(rating);
}

function rate(endIndex) {
  for (let i = 0; i < endIndex; i++) {
    stars[i].classList.remove("star-empty");
    stars[i].classList.add("star-filled");
  }
}

function unRate(startIndex) {
  for (let i = startIndex; i < 5; i++) {
    stars[i].classList.remove("star-filled");
    stars[i].classList.add("star-empty");
  }
}
