console.log("summary2 of dom");

const allSectionTitle = document.getElementsByClassName("section-title");
console.log(allSectionTitle);

const secondItem = document.getElementById("item-list");

const li = document.createElement("li");
li.innerText = "my dynamic li list";
secondItem.appendChild(li);

const main = document.getElementById("main-content");
const section = document.createElement("section");
section.innerHTML = `

<h1>My Dynamic Section </h1>
<p> Extra text added inside the paragraph of my dynamic section </p>
<ul>
<li>first item </li>
<li>first item </li>
<li>first item </li>
<li>first item </li>
<li>first item </li>
</ul>
`;

main.appendChild(section);

