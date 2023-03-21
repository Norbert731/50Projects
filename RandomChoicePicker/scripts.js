const tagsElements = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea?.focus();

//

textarea?.addEventListener("keyup", (e) => {
  // @ts-ignore
  createTags(e.target?.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      // @ts-ignore
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

// Create tags below textarea from user input

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  // @ts-ignore
  tagsElements.innerHTML = "";

  tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.classList.add("tag");
    tagElement.innerText = tag;
    tagsElements?.appendChild(tagElement);
  });
}

// Select a random choice

function randomSelect() {
  const times = 30;

  //  highlight random tags before final resualt
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    // hightliht final result
    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

// Random highlight

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
