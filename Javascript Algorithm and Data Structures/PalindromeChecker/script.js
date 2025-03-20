document.addEventListener("DOMContentLoaded", () => {
  const checkBtn = document.getElementById("check-btn");
  const textInput = document.getElementById("text-input");
  const result = document.getElementById("result");

  checkBtn.addEventListener("click", () => {
    // Get the input value
    const inputValue = textInput.value;

    // Check if input is empty
    if (!inputValue) {
      alert("Please input a value");
      return;
    }

    // Check if it's a palindrome
    const isPalindrome = checkPalindrome(inputValue);

    // Display the result
    result.textContent = `${inputValue} is ${
      isPalindrome ? "a" : "not a"
    } palindrome.`;
    result.className = isPalindrome ? "palindrome" : "not-palindrome";
  });

  // Function to check if a string is a palindrome
  function checkPalindrome(str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanString = str.replace(/[^0-9a-z]/gi, "").toLowerCase();

    // Check if the string is a palindrome
    const reversedString = cleanString.split("").reverse().join("");
    return cleanString === reversedString;
  }

  // Add event listener for Enter key
  textInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      checkBtn.click();
    }
  });
});
