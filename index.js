function fizzBuzz(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      console.log("fizzBuzz");
      continue;
    }
    if (arr[i] % 3 === 0) {
      console.log("fizz");
    } else if (arr[i] % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(arr[i]);
    }
  }
}

fizzBuzz([0, 6, 5, 4, 8, 9, 15, 8, 11, 18, 30, 20, 25]);
