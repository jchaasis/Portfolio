//goal: display greetings in different languages over the dunes. Show one of them at a time and fade in and out periodically.

const greetings = ['Welcome', 'Bienvenido', 'Willkommen', 'Aloha', 'Bienvenue', 'Shalom', 'Welkom', 'Karibu', 'Benvenuto'];

//the value will change
let greeting = 'Welcome';

//grab the greeting display element
let display = document.getElementById('greetDisplay');

//create the h1 element
let text = document.createElement('h1');
display.appendChild(text);

//create a function that will change the value of greeting
//index counter. start at index 1 because the initial value greeting is greetings[0]
let i = 1;

function greet() {
  //set the text of the text element
  text.innerHTML = greeting;
  //index of the last element in the array
  let last = greetings.length - 1;
  //change the greeting
  greeting = greetings[i];
  //add one to the index until we reach the last element, then
  i < last ? i++ : i = 0;
}

//call the greet function periodically to change the greeting that is displayed
setInterval(()=>{greet()},9000);
