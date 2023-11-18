function countDown(num) {
  // base case
  if (num <= 0) {
    console.log("All Done");
    return;
  }

  // recursive call
  console.log(num);
  countDown(num - 1);
}

countDown(10);
