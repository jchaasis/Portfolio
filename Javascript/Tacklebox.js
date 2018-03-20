
// Goal: when hover over the lures, the name of the technology displays in a div above the icon.
//find the icons
let lures = document.getElementsByClassName('lure');
//add event listener for when the mouse hovers over the icon


for (let i = 0; i<lures.length; i++){
  lures[i].addEventListener('mouseenter', displayText)
  lures[i].addEventListener('mouseleave', removeText)
}

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
  // tStyles.bottom = 75 + 'px';
  // tStyles.textDecoration = 'none';
  tStyles.zindex = 20;

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
