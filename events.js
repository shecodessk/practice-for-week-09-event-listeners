// Your code here

window.addEventListener("DOMContentLoaded", (event) => {
  const input = document.getElementById("red-input");
  input.addEventListener("change", (event) => {
    input.value === "red"
      ? input.classList.add("red")
      : input.classList.remove("red");
  });

  const button = document.getElementById("add-item");
  const inputTwo = document.getElementById("list-add");
  const ul = document.getElementById("ul");

  button.addEventListener("click", (event) => {
    let li = document.createElement("li");
    li.innerHTML = inputTwo.value;
    ul.appendChild(li);
  });

  const inputThree = document.getElementById("color-select");
  const sectionThree = document.getElementById("section-3");

  inputThree.addEventListener("change", (event) => {
    const color = event.target.value;
    if (color) {
      sectionThree.style.backgroundColor = color;
    }
  });
});

/*
;*/
