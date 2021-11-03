# Review 11/3/21: JavaScript DOM

- DOM API allows JS to manipulate the html document
- Document Object Model, **DOM**
- User Interactivity

## Selecting Elements

`document.getElementById("id")` - returns one element
`document.getElementsByClassName("class")` - returns an HTMLCollection
`document.getElementsByTagName("tag")` - returns an HTMLCollection

`document.querySelector("cssSelector")` - returns one element
`document.querySelectorAll("cssSelector)` - returns an HTMLCollection

## Update Elements

Use dot/bracket notation to access/reassign properties on the element objects

`element.textContent = "New text"`
or
`element.classList.add("newClassName")`

## Create Elements

`document.createElement("tag")` - creates an element of a specific tagname

Created elements must also be added to the DOM:

`parent.appendChild(element)` - adds an element at the end of the parent's dom tree
`parent.insertBefore(element, refElement)` - adds an element before a previous child in a parent dom tree

## Deleting Elements

`parent.removeChild(element)` - deletes an element from the DOM

## Replacing Elements

`parent.replaceChild(element, refElement)` - replaces a referenced element with a new element

## Events and How to Handle Them

Assign functions as _event handlers_

1. `element.onclick = function (event) { // handle event }` - only one handler per event
2. `element.addEventListener("click", function (event) { // handle event })` - many handlers for one event
