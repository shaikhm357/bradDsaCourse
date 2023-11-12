console.log(isPalindrome('"hell$#$#o'));

function isPalindrome(str) {
  let formatted = removeNonAlphanumeric(str.toLowerCase());
  let reversed = "";
  for (let i = formatted.length - 1; i >= 0; i--) {
    reversed += formatted[i];
  }
  return formatted === reversed;
}

function removeNonAlphanumeric(str) {
  let formatted = "";
  for (let i = 0; i < str.length; i++) {
    if (isAlphanumeric(str[i])) {
      formatted += str[i];
    }
  }
  return formatted;
}

function isAlphanumeric(char) {
  let code = char.charCodeAt();
  if ((code >= 48 && code <= 57) || (code >= 97 && code <= 122)) {
    return true;
  } else {
    return false;
  }
}
