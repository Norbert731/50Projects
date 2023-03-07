const loadText = document.querySelector(".loading-text");
const loadBg = document.querySelector(".bg");

let load = 0;
let int = setInterval(blurring, 15);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }

  // @ts-ignore
  loadText.innerText = `${load}%`;
  // @ts-ignore
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  // @ts-ignore
  loadBg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  console.log(load);
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
