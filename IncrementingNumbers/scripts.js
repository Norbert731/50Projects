const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.textContent = "0";

  const updateCounter = () => {
    const target = Number(counter.getAttribute("data-target"));
    const c = Number(counter.textContent);

    const increment = target / 300;

    if (c < target) {
      counter.textContent = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    }
  };

  updateCounter();
});
