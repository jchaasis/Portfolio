//goal: display greetings in different languages over the dunes. Show one of them at a time and fade in and out periodically.

const greetings = ['Welcome', 'Bienvenido', 'Willkommen', 'Aloha', 'Bienvenue', 'Shalom', 'Welkom', 'Karibu', 'Benvenuto'];

//grab the greeting display element
let display = document.getElementById('greetDisplay');

//create the h1 element
let text = document.createElement('h1');
text.innerHTML = "Welcome";
display.appendChild(text);

//create a function that will change the value of greeting
//index counter. start at index 1 because the initial value greeting is greetings[0] and the function won't start running for 4 seconds
let i = 1;

function greet() {
  //set the text of the text element
  text.innerHTML = greetings[i];
  //index of the last element in the array
  let last = greetings.length - 1;
  //change the greeting
  // greeting = greetings[i];
  //add one to the index until we reach the last element, then
  i < last ? i++ : i = 0;
}

//call the greet function periodically to change the greeting that is displayed
setInterval(()=>{greet()}, 3000);
// ************************************* End Greeting *************************************

// Goal: when hover over the navigation icons, the name of the sections displays in a div above the icon.
//find the icons
let icons = document.getElementsByClassName('navPic');
//add event listener for when the mouse hovers over the icon
for (let i = 0; i<icons.length; i++){
  icons[i].addEventListener('mouseover', displayText)
  icons[i].addEventListener('mouseleave', removeText)
}

// icons.forEach(icon => icon.addEventListener('mouseover', displayText))
function displayText(){

  let id = event.target.id
  //find the current item
  let current = document.getElementById(id);
  //find its parent
  let parent = current.parentNode
  //create the textbox
  let textBox = document.createElement('p');
  textBox.innerHTML = id;

  //add style to the text
  let tStyles = textBox.style

  tStyles.color = 'black';
  // tStyles.backgroundColor = 'rgba(78, 78, 78, 0.71)';
  // tStyles.background = 'content-box radial-gradient(rgba(78, 78, 78, 0.71), rgba(255, 255, 255, 0))'
  tStyles.position = 'absolute';
  tStyles.bottom = 75 + 'px';
  tStyles.textDecoration = 'none';
  // tStyles.zindex = 20;

  //add id so that we can remove the label later
  textBox.setAttribute('id', `${id}Label`)

  //attach the new text node
  parent.insertBefore(textBox, current)
}

//remove the text box when we leave the icons
function removeText(){
  let id = event.target.id

  //find the current item
  // let current = document.getElementById(id);
  let label = document.getElementById(`${id}Label`);

  label.remove()
}
