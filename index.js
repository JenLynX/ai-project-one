function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 39,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-choice");
  let apiKey = "2ed0136b04468d6a1ocad4648aaft294";

  let context =
    "You are a fun poem expert and love to write short poems that have rhymes. Your goal is to generate a short 4 line rhyming poem using the subject the user chooses and separate each line with a <br />. Please sign your poem with 'SheCodes AI' inside a <strong> element. Please follow the user instructions.";
  let prompt = `user instructions: Generate a poem that rhymes about ${userInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
