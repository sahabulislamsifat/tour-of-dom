const sections = document.querySelectorAll("section");

// console.log(sections);

for (const section of sections) {
  //   console.log(section);
  section.style.border = "2px solid steelblue";
  section.style.marginBottom = "5px";
  section.style.marginLeft = "5px";
  section.style.paddingLeft = "25px";
  section.style.backgroundColor = "lightgray";
}

// const placesContainer = document.getElementById("places-container");
// placesContainer.style.backgroundColor = "tomato";

// const placesContainer = document.getElementById("places-container");
// placesContainer.classList.add("red-bg");

const placesContainer = document.getElementById("places-container");
placesContainer.classList.add("text-center");
placesContainer.classList.add("font-size");

// placesContainer.classList.remove("text-center");
placesContainer.classList.remove("font-size");
