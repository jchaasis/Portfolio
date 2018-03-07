
//Goal: when the user hovers over the map, we want the coordinates of the cursor's current position to display next to the cursor.
//assistance in understanding how to achieve this goal came from: https://www.w3schools.com/jsref/event_clientx.asp

//locate the projects div
let projectsContainer = document.getElementById("projects");

//locate the div that holds the coordinates
let coordsContainer = document.getElementById("coordsContainer");
//locate the p tag that will be used to display the coordinates
let coordsDisplay = document.getElementById("coordinates");
//get and display the screen coordinates
function showCoords(event) {
    //attain the coordinates of the cursor
    let x = event.clientX;
    let y = event.clientY;
    let coords = `(${x}, ${y})`

    //assign the position of the container
    coordsContainer.style.left = x + 'px';
    coordsContainer.style.top = y + 'px';
    //display the coordinates in the p tag
    coordsDisplay.innerHTML = coords;
}

//assign event listener to handle the mouseover event
projectsContainer.addEventListener("mousemove", showCoords)

//clear the coordinates when the mouse leaves the map
function clearCoords() {
    coordsDisplay.innerHTML = "";
}
//add event for when the mouse leaves the map
projectsContainer.addEventListener("mouseleave", clearCoords);
// ******************* End coordinates portion********

//Goal: When a user hovers over a marker on the map, it expands and shows the details of a project.

// ***the projects array has been created and stored in the data.js file

//first off, create a function that will retrieve the data and in the data file and create the appropriate div

let visible = false;

// let test = document.getElementById('proj1')
// console.log(test.style)

function showProject(){

  //shortened for use below
  let id = event.target.id;

  // //find the dom getElement
  let activeProj = document.getElementById(id);

  // //store the active styles so we can reset them when the user leaves the divs
  let style = activeProj.style;

  let top = style.top;
  let left = style.left;

  if (visible === false){
    //set visible to true so that the actions do not continue to repeat.
    visible = true;

    //assign a number to match up with the elements in the projects array
    let index = id === "proj1" ? "0" : id === "proj2" ? "1" : id === "proj3" ? "2" : id === "proj4" ? "3" : null;

    //change the styles
    activeProj.style.transitionProperty = 'all';
    activeProj.style.transitionDuration = 500 + 'ms';
    activeProj.style.width = 90 + '%';
    activeProj.style.height = 90 + '%';
    activeProj.style.borderRadius = 5 + 'px'
    activeProj.style.left = 5 + '%';
    activeProj.style.top = 0 + 'px';
    activeProj.style.zIndex = 5;
    activeProj.style.animation = 'none';

    //create an image element
    let img = document.createElement('img');
    img.src = projects[index].image;
    img.style.width = 70 + '%';

    //create a p element
    let p = document.createElement('p');
    p.innerHTML = projects[index].description;
    //create 2 anchor elements

    // //add an exit button that will close the project view
    // let exit = document.createElement('input');
    // exit.type = 'button';
    // exit.value = 'X';
    //
    // exit.addEventListener("click", hideProject)

    activeProj.addEventListener("mouseleave", hideProject)

    // append the new elements to the div once it is has reached the appropriate size
    setTimeout(function(){
      //this prevents the dom elements from loading if the cursor briskly slides across a marker
      if (visible === true){
        activeProj.appendChild(img);
        activeProj.appendChild(p);
      }
    }, 500)
    // activeProj.appendChild(exit)
    // activeProj.appendChild(img);
    // activeProj.appendChild(p);


    //hide the project when you exit
    function hideProject() {
      //
      // if (visible === true){

        console.log(`leaving ${id} now`)
        //remove the added dom elements
        // activeProj.removeChild(img);
        // activeProj.removeChild(p);
        img.remove();
        p.remove();

        // //change the styles
        activeProj.style.width = 50 + 'px';
        activeProj.style.height = 50 + 'px';

        //reset visible
      // }
      visible = false;
    }
    //add a listener for when the cursor exits the divs
    //it needs to be added once the div has reached its full width

    activeProj.addEventListener("mouseleave", hideProject)

  }
}
// //hide the project when you exit
// function hideProject() {
//
//   if (visible === true){
//     console.log('leaving now')
//
//     let id = event.target.id;
//
//     //find the dom getElement
//     let activeProj = document.getElementById(id);
//
//     // //change the styles
//     // activeProj.style.width = 50 + 'px';
//   }
// }

//add event listeners to the divs
  //proj1
let proj1 = document.getElementById("proj1")
proj1.addEventListener("mouseenter", showProject)

// proj1.addEventListener("mouseleave", hideProject)

  //proj2
let proj2 = document.getElementById("proj2");
proj2.addEventListener("mouseenter", showProject)

// proj2.addEventListener("mouseleave", hideProject)
  //proj3
let proj3 = document.getElementById("proj3")
proj3.addEventListener("mouseenter", showProject)

// proj3.addEventListener("mouseleave", hideProject)
  //proj4
let proj4 = document.getElementById("proj4")
proj4.addEventListener("mouseenter", showProject)
// proj4.addEventListener("mouseleave", hideProject)
