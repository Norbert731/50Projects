const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  console.log(e);
  // @ts-ignore
  insert.innerHTML = `
    <div class="key">
    <small>event.key</small>
    ${e.key === "" ? "Space" : e.key}
  </div>

  <div class="key">
    <small>event.keyCode</small>
    ${e.keyCode}
  </div>

  <div class="key">
    <small>event.code</small>
    ${e.code}
  </div>
  `;
});
