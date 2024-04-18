#This is a practice exercise for the lesson on DOM Manipulation and Events from The Odin Project.

In the following section it is reported a quick summary of the commands used throughout the exercise:

--------------------------------- DOM Manipulation --------------------------------

-Query selectors

-Element creation
    -Adding text content
    -Adding inline style

-Append elements

-Remove elements

-Altering elements

-Editing attributes

-Working with classes

--------------------------------- Events ------------------------------------------

First of all, what are events? Events are actions that occur on the webpage, such as mouse-clicks or key-presses. Through Javascript, it is possible to abilitate the webpage to listen and respond to these events.

There are three different ways to implement this behaviour:

-Method 1

    Specify function attributes to the HTML elements directly in the html file.

    Example: <button onclick="alert('Hello World')">Click Me</button>
    
    With this method we are implementing Javascript to our HTML file and we use it     for one element at a time.

-Method 2

    Setting properties in the form of on<EventType>, such as onclick or onmousedown    , on the DOM nodes in the Javascript file
    
    Example: <button id="btn">Click Me</button> <!-- we are in the HTML file -->
            const btn = document.querySelector("#btn");
            btn.onclick = () => alert("Hello World");

    This method is better than Method 1 because we are not cluttering the HTML file     with javascript, but we are still adding one event at a time.

-Method 3
    
    Attaching event listener to the DOM nodes in the Javascript file.
    
    Example: <button id="btn">Click Me</button> <!-- we are in the HTML file -->
                const btn = doument.querySelector("#btn");
                btn.addEventListener("click", () => {
                    alert("Hello World");
                });

    This method is much more flexible and powerful, but a bit more complex to set up.

These three methods can be used with named functions as well! Here's an example:

<!--in the HTML file (method1)-->
<button onclick="alertfunction()" id="btn">Click Me</button>
//in the javascript file (method 1)
function alertfunction() {
    alert("Hello world");
}

//Method 2 and 3 in javascript
const btn = document.querySelector("#btn#);
btn.onclick = alertfunction; //Method 2

btn.addEventListener("click", alertfunction);

If we have multiple buttons like so:
<button id="1">Click Me</button>
<button id="2">Click Me</button>

we add event listener to all of them as follows:

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});

