const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

// next button

next?.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  updatePosition();
});

// previous button

prev?.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }

  updatePosition();
});

// function describing position in progress

function updatePosition() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  // @ts-ignore
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    // @ts-ignore
    prev.disabled = true;
  } else if (currentActive == circles.length) {
    // @ts-ignore
    next.disabled = true;
  } else {
    // @ts-ignore
    prev.disabled = false;
    // @ts-ignore
    next.disabled = false;
  }
}
