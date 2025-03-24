import { checkPalindrome } from "./utils/checkPalindrome.js";
import { convertToLowerCase } from "./utils/convertToLowerCase.js";
import { displayResult } from "./utils/displayResult.js";
import { ifIsEmptyString } from "./utils/ifIsEmptyString.js";

document.addEventListener("DOMContentLoaded", () => {
  const checkBtn = document.getElementById("check-btn");
  const textInput = document.getElementById("text-input");
  const result = document.getElementById("result");

  checkBtn.addEventListener("click", () => {
    const inputValue = textInput.value.trim(); // Supprime les espaces(trim)

    ifIsEmptyString(inputValue);

    const normalizedInput = convertToLowerCase(inputValue);
    const isPalindrome = checkPalindrome(normalizedInput);

    displayResult(inputValue, isPalindrome);
  });

  textInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      checkBtn.click();
    }
  });
});
