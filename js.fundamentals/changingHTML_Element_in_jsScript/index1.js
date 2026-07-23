// ------------ EXAMPLE 1 <h1> ------------

// STEP 1 CREATE THE ELEMENT

//const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTE/PROPERTIES
//newH1.textContent = "I live pizza"
//newH1.id = "myH1"
//newH1.style.color = "tomato"
//newH1.style.textAlign = "center"

// STEP 3 APPEND ELEMENT TO DOM
//document.body.append(newH1)
//document.body.prepend(newH1)
//document.getElementById("box3").append(newH1)
//document.getElementById("box1").prepend(newH1)

//const box2 = document.getElementById("box2")

//document.body.insertBefore(newElement, currentElement);
//document.body.insertBefore(newH1, box1);

// REMOVE HTML ELEMENT

//document.body.removeChild(newH1)

// ------------ IF THE HTML DOESN'T HAVE AN ID ------------

//const boxes = document.quesrySelectorAll(".box");
//document.body.insertBefore(newH1, boxes[3])

const newListItem = document.createElement("li");

newListItem.textContent = "coconut"
newListItem.id = "cocont"
newListItem.style.fontWeight = "bold"
newListItem.style.backgroundColor = "lightgreen"

document.body.append(newListItem)
document.getElementById("fruits").prepend(newListItem)

const listItem = document.querySelectorAll("#fruits li")
document.getElementById("fruits").insertBefore(newListItem, listItem[4])