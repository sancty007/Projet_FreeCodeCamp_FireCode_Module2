export function ifIsEmptyString(inputValue) {
  if (!inputValue) {
    alert("Please input a value");
    throw new Error("Empty input");
  }
}
