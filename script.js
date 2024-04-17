const container = document.querySelector(".container");
const contentp = document.createElement("p");

contentp.textContent = "Hey I'm red!";
contentp.setAttribute("style", "color: red; background-color: yellow; border-style: solid; border-color: blue; border-width: 10px; padding: 10px;");
container.appendChild(contentp);

const contenth3 = document.createElement("h3");
contenth3.textContent = "I'm a blue h3!";
container.appendChild(contenth3);

const containerdiv = document.createElement("div");
containerdiv.classList.add("containerdiv");
containerdiv.setAttribute("style", "border-style: solid; border-color: black; background-color: pink;");

const contentNewDiv = document.querySelector(".containerdiv");
const anotherh1 = document.createElement("h1");
const anotherp = document.createElement("p");

anotherh1.textContent = "I'm in a div";
anotherp.textContent = "ME TOO!";

containerdiv.appendChild(anotherh1);
containerdiv.appendChild(anotherp);
container.appendChild(containerdiv);
