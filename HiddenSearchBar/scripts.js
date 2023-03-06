const searchContainer = document.querySelector(".search");
const searchButton = document.querySelector(".btn");
const searchInput = document.querySelector(".input");

searchButton?.addEventListener("click", () => {
  // @ts-ignore
  searchContainer.classList.toggle("active");
  // @ts-ignore
  searchInput.focus();
});
