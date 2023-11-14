function diceGameSimulation(len) {
  for (let i = 0; i < len; i++) {
    let dice1 = Math.floor(Math.random() * 6 + 1);
    let dice2 = Math.floor(Math.random() * 6 + 1);

    let sum = dice1 + dice2;
    if (sum === 11 || sum === 7) {
      console.log(
        `dice1 : ${dice1} dice2 : ${dice2} sum : ${sum} result : win`
      );
    } else if (sum === 2 || sum === 3 || sum === 12) {
      console.log(
        `dice1 : ${dice1} dice2 : ${dice2} sum : ${sum} result : lose`
      );
    } else {
      console.log(`roll back`);
    }
  }
}

diceGameSimulation(3);
