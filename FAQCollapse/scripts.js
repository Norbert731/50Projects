const toggles = document.querySelectorAll(".btn");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    // @ts-ignore
    toggle.parentNode.classList.toggle("show");
  });
});
