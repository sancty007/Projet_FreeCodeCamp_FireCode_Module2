export function convertToLowerCase(str) {
  // Convert to lowercase and remove all non-alphanumeric characters
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}
