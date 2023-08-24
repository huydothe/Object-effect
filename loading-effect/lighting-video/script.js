const text = "lighting";
const splitText = text.split("");
const ul = document.createElement("ul");
const wrapper = document.querySelector(".wrapper");
wrapper.appendChild(ul);
ul.style.listStyle = "none";

splitText.forEach((item, index) => {
  li = document.createElement("li");
  li.style.animationDelay = `${index * 0.1}s`;
  li.style.display= 'inline-block'
  li.textContent = item;
  ul.appendChild(li);
});
