function isValidIpv4(ip) {
  let octates = ip.split(".");
  if (octates.length !== 4) {
    return false;
  }
  return octates.every((octate) => {
    let num = parseInt(octate);
    return num >= 0 && num <= 255 && octate === num.toString();
  });
}
console.log(isValidIpv4("1.2.3.4"));
console.log(isValidIpv4("123.244.140.4.9"));
console.log(isValidIpv4("0.2.300.4"));
console.log(isValidIpv4("0.2.255.4"));
