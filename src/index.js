function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["generated poem"],
    autoStart: true,
    delay: 1,
  });
}

let poemFormElement = document.querySelector("#poem-topic");
poemFormElement.addEventListener("submit", generatePoem);
