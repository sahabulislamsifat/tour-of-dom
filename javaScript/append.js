// console.log(" Hello! Append Js");

// 1. Where to Add
const placesList = document.getElementById("places-list");
// console.log(placesList);

// 2. what to be added
const li = document.createElement("li");
li.innerText = "Kuakata (Sea Beach)";

// 3. add the child
placesList.appendChild(li);

// ---------------------------

const mainContainer = document.getElementById("main-container");
// console.log(mainContainer);

const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My Food List";
section.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "biriyani";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "Khichuri";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Borhani";
ul.appendChild(li3);

const li4 = document.createElement("li");
li4.innerText = "Salad";
ul.appendChild(li4);

section.appendChild(ul);
mainContainer.appendChild(section);

// set innerHTML Directly
const dressCollection = document.createElement("section");
dressCollection.innerHTML = `
<h1> My Dress Collection </h1>

<ul>

<li>Shirt</li>
<li>T-Shirt</li>
<li>Pant</li>
<li>Lungi</li>
<li>Sendo Genji</li>

</ul>

`;

mainContainer.appendChild(dressCollection);
