function greetUser() {
  let name = prompt('Name:');
  let mood = prompt('Mood:');
  const greet = `Hello ${name}! You seem ${mood} today!`;
  alert(greet);
}
