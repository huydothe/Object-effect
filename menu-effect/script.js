const data = ["Home", "About", "Portfolio", "Contact", "Other"];
const menu = document.getElementById("menu");

data.forEach((item, index) => {
  const r = document.createElement("div");
  r.classList.add("wrapper");
  const button = document.createElement("div");
  const division = document.createElement("div");
  const text = document.createElement("div");
  text.classList.add("text");
  text.setAttribute("data-text", item);
  r.appendChild(button);
  button.appendChild(division);
  button.appendChild(text);
  button.classList.add("button");
  text.textContent = item;
  division.classList.add("division");
  menu.appendChild(r);
});
