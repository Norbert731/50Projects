const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const procentage = document.getElementById("procentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, index) => {
  cup.addEventListener("click", () => hightlightCups(index));
});

function hightlightCups(index) {
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling?.classList.contains("full")
  ) {
    index--;
  }

  smallCups.forEach((cup, idx) => {
    if (idx <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  // @ts-ignore
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    // @ts-ignore
    procentage.style.visibility = "hidden";
    // @ts-ignore
    procentage.style.height = 0;
  } else {
    // @ts-ignore
    procentage.style.visibility = "visible";
    // @ts-ignore
    procentage.style.height = `${(fullCups / totalCups) * 330}px`;
    // @ts-ignore
    procentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups == totalCups) {
    // @ts-ignore
    remained.style.visibility = "hidden";
    // @ts-ignore
    remained.style.height = 0;
  } else {
    // @ts-ignore
    remained.style.visibility = "visible";
    // @ts-ignore
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
