function rollDice() {
  
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  
  const diceImage = document.getElementById("dice");
  diceImage.src = `dice${randomNumber}.png`;
  diceImage.alt = `dice ${randomNumber}`;
}