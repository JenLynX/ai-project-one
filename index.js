function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Poems here. Poems there. Poems are everywhere.",
    autoStart: true,
    delay: 39,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
