function validateEmail(email) {
  if (email.indexOf("@") === -1) {
    return false;
  }
  const [localPart, domain] = email.split("@");
  if (localPart.length === 0 || domain.length < 3) {
    return false;
  }
  const domainExtension = domain.split(".");
  // console.log(domainExtension);
  if (domainExtension[0].length === 0 || domainExtension[1].length < 2) {
    return false;
  }
  return true;
}

console.log(validateEmail("exmaple.com"));
console.log(validateEmail("exmaple@.com"));
console.log(validateEmail("exmaple@gmail.com"));
console.log(validateEmail("exmaple@g.com"));
