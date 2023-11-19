function reverseStr(str) {
  if (str === "") {
    return "";
  }
  //   console.log(str.substring(1));
  return reverseStr(str.substring(1)) + str.charAt(0);
}

console.log(reverseStr("hello"));
