function rollDice() {
  const diceNumber = document.getElementById("dice-number").value;
  const diceResult = document.getElementById("diceResult");
  const diceImage = document.getElementById("diceImage");
  const values = [];
  const images = [];
  for (let i = 0; i < diceNumber; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="img/dice-${value}.jpg" alt="dice ${value}"> `);
  }
  diceResult.textContent = `dice: ${values.join(", ")}`;
  diceImage.innerHTML = images.join(" ");
}
// const array = [1, 2, 4, 5, 6];
// const power = array.map((eml) => Math.pow(eml, 2));
// console.log(power

// );
// const person = {
//   Name: "Long Chea",
//   Age: 25,
//   Food: "Like pizza",
//   people: function () {
//     console.log(
//       `Hello My Name ${this.Name} im ${this.Age} my fovorite food ${this.Food}`,
//     );
//   },
// };
// person.people();
function Car(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}
const car1 = new Car("Roll Roys", 2026, "Red");
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
