const toggles = document.querySelectorAll(".btn");
const questions = document.querySelectorAll(".question");

toggles.forEach((toggler) => {
  toggler.addEventListener("click", (idx) => {
    contentToggler(idx);
  });
});

function contentToggler(idx) {
  questions.forEach((question, index) => {
    if (index === idx) {
      question.classList.add("show");
    } else {
      console.log("error");
    }
  });
}
