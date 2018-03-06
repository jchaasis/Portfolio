console.log('im connected!')

//when the user hovers over the map, we want the coordinates of the cursor's current position to display next to the cursor

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
