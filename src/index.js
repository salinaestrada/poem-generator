function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  //build the API URL
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "33obd0t0e73070dfb50ab4b3fb3c9fe1";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are an chicana poet. You write mostly in English but include Spanish words as well. Your job is to write an 4 line ode using the user instructions from the prompt. separate each line with a <br />. Do not include a title. Sign the code with 'Written using SheCodes AI' inside a <small> element at the end of the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class = "blink">Generating a poem about ${instructionsInput.value}...</div>`;

  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

//display the generated poem

let poemFormElement = document.querySelector("#poem-topic");
poemFormElement.addEventListener("submit", generatePoem);
