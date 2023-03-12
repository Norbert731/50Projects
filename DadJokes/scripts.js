const jokeContent = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn?.addEventListener("click", generateJoke);

generateJoke();

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com", config)
    .then((respone) => respone.json())
    .then((data) => {
      // @ts-ignore
      jokeContent.innerHTML = data.joke;
    });
}
