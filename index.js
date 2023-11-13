function liked(arr) {
  const n = arr.length;
  switch (n) {
    case 0:
      console.log(`No One Likes This`);
      break;
    case 1:
      console.log(`${arr[0]} likes this`);
      break;
    case 2:
      console.log(`${arr[0]} and ${arr[1]} like this`);
      break;
    case 3:
      console.log(`${arr[0]} , ${arr[1]} and ${n - 2} other like this`);
      break;
    default:
      console.log(`${arr[0]} , ${arr[1]} and ${n - 2} others like this`);
  }
}

liked(["lufy", "sanji"]);
liked(["lufy"]);
liked(["lufy", "sanji", "nami"]);
liked(["lufy", "sanji", "nami", "zoro"]);
