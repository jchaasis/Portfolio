
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

// ********************** End coordinates portion********************


//Goal: When a user hovers over a marker on the map, it expands and shows the details of a project. When the user leaves the project preview, the marker shrinks back to its original state.

// *****the projects array has been created and stored in the data.js file*****

//use to keep track of open projects so that only one can be open at a time.
let visible = false;

let allProjects = document.getElementsByClassName('project');

function showProject(){
  //shortened for use below
  let id = event.target.id;

  //find the dom element
  let activeProj = document.getElementById(id);

  //I am having trouble getting the dots that arent being visited to stay put so I am going to hide them when a project is pulled up.
    //loop through the array of projects selected by class name and if the id doesn't match the current one, set the display to 'none'
  for (let i = 0; i<allProjects.length; i++){
    if (allProjects[i].id != id){
      allProjects[i].style.transitionProperty = 'none';
      allProjects[i].style.opacity = 0;
    }
  }

  //store the active styles so we can reset them when the user leaves the divs
  let style = window.getComputedStyle(activeProj, null)
  let top = style.top;
  let left = style.left;

  if (visible === false){
    //set visible to true so that the actions do not continue to repeat.
    visible = true;

    //assign a number to match up with the elements in the projects array
    let index = id === "proj1" ? "0" : id === "proj2" ? "1" : id === "proj3" ? "2" : id === "proj4" ? "3" : null;

    //change the styles
    let styles = activeProj.style;

    styles.position = 'relative';

    styles.transitionProperty = 'all';
    styles.transitionDuration = 500 + 'ms';
    styles.backgroundColor = 'white';
    styles.width = 90 + '%';
    styles.height = 90 + '%';
    styles.borderRadius = 100 + 'px'
    styles.left = 0 + '%';
    styles.top = 0 + 'px';
    //z index needs to change so that the div doesn't stutter and get stuck in a state of constantly changing.
    styles.zIndex = 20;
    styles.animation = 'none';

    //create an image element
    let img = document.createElement('img');
    img.src = projects[index].image;
    img.style.width = 70 + '%';

    //create a p element
    let p = document.createElement('p');
    p.innerHTML = projects[index].description;

    //create 2 anchor elements
    let liveLink;
    if (projects[index].live != null){
      liveLink = document.createElement('a');
      liveLink.href = projects[index].live;
      liveLink.target = "_blank";
      liveLink.innerHTML = "VIEW PROJECT";
    } else {
      liveLink = null;
    }
    // let liveLink = document.createElement('a');
    // liveLink.href = projects[index].live;
    // liveLink.target = "_blank";
    // liveLink.innerHTML = "VIEW PROJECT";

    let codeLink = document.createElement('a');
    codeLink.href = projects[index].github
    codeLink.target = "_blank";
    codeLink.innerHTML = "VIEW CODE";

    //add listener to handle the cursor exiting the div
    // setTimeout(function(){
    //   activeProj.addEventListener("mouseleave", hideProject)
    // })
    // activeProj.addEventListener("mouseleave", hideProject)

    //append the new elements to the div once it is has reached the appropriate size. this will
    setTimeout(function(){
      //this prevents the dom elements from loading if the cursor briskly slides across a marker
      if (visible === true){
        activeProj.appendChild(img);
        activeProj.appendChild(p);
        if (liveLink){
          activeProj.appendChild(liveLink);
        }
        activeProj.appendChild(codeLink);
        //add listener to handle the cursor exiting the div, add it here so to avoid glitches that can occur based off of
        activeProj.addEventListener("mouseleave", hideProject)
      }
    }, 500)

    //hide the project when you exit
    function hideProject() {


      //remove the added dom elements
      img.remove();
      p.remove();
      if (liveLink){
        liveLink.remove();
      }
      // liveLink.remove();
      codeLink.remove();

      //change the styles back to the originals
      // styles.position = 'relative';
      styles.width = 50 + 'px';
      styles.height = 50 + 'px';
      styles.top = top;
      styles.left = left;
      styles.backgroundColor = 'red';
      styles.borderRadius = 50 + '%';
      styles.animation = 'pulse 3s infinite';

      //bring back the projects that were hidden once the project that was viewed returns to original size.
      setTimeout(function(){
        for (let i = 0; i<allProjects.length; i++){

            allProjects[i].style.opacity = 1;
        }
      }, 500)
      // for (let i = 0; i<allProjects.length; i++){
      //     allProjects[i].style.opacity = 1;
      // }

      //allow the user to view another project
      visible = false;
    }
  }
}

//add event listeners to the project markers
  //proj1
let proj1 = document.getElementById("proj1")
proj1.addEventListener("mouseenter", showProject)
  //proj2
let proj2 = document.getElementById("proj2");
proj2.addEventListener("mouseenter", showProject)
  //proj3
let proj3 = document.getElementById("proj3")
proj3.addEventListener("mouseenter", showProject)
  //proj4
let proj4 = document.getElementById("proj4")
proj4.addEventListener("mouseenter", showProject)
