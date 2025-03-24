export function displayResult(inputValue, isPalindrome) {
  const result = document.getElementById("result");

  if (!result) {
    console.error("Result element not found");
    return;
  }

  if (inputValue === "") {
    result.textContent = "Please input a value";
    result.className = "error";
    return;
  }

  result.textContent = `${inputValue} is ${
    isPalindrome ? "a" : "not a"
  } palindrome.`;

  result.className = isPalindrome ? "palindrome" : "not-palindrome";
}
