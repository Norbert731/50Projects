const questions = document.querySelectorAll(".question");
const qBtn = document.querySelector(".btn");

questions.forEach((question) => {
  qBtn?.addEventListener("click", () => {
    question.classList.add("show");
  });
});
