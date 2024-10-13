const input = document.querySelector("textarea");
const wordCount = document.querySelector("[data-word-count]");
const characterCount = document.querySelector("[data-character-count]");
const sentenceCount = document.querySelector("[data-sentence-count]");
const paragraphCount = document.querySelector("[data-paragraph-count]");

function updateCounts() {
  if (!input.value) {
    resetCounts();
    return;
  }

  const wordsArray = input.value.split(" ").filter((word) => word !== "");
  wordCount.innerText = wordsArray.length;

  // count characters
  characterCount.innerText = input.value.length;

  // count sentences
  const sentenceArray = input.value.split(/[.!]/);
  sentenceCount.innerText = sentenceArray.length - 1;

  //   it will count as a sentence only if you type "." at then end of it

  // count paragraphs
  const paragraphArray = input.value.split("\n").filter((p) => p.trim() !== "");
  paragraphCount.innerText = paragraphArray.length;
}

function resetCounts() {
  wordCount.textContent =
    characterCount.textContent =
    sentenceCount.textContent =
    paragraphCount.textContent =
      "0";
}

input.addEventListener("input", updateCounts);
