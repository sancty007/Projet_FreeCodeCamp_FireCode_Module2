import { reverseString } from "./reverseString.js";

export function checkPalindrome(str) {
  const reversedString = reverseString(str);
  return str === reversedString;
}
