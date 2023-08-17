const data = "smoky effect";
const screen = document.getElementById("interboard");
const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
screen.appendChild(wrapper);

data.split("").forEach((item, index) => {
  const text = document.createElement("div");
  text.classList.add("text");

  if (item === " ") {
    text.classList.add("space");
  } else {
    text.textContent = item;
  }
  wrapper.addEventListener("mouseover", () => {
    text.style.transitionDelay = `${index * 0.1}s`; // Adjust the delay value as needed
  });

  wrapper.addEventListener("mouseout", () => {
    text.style.transitionDelay = "0s";
  });

  wrapper.appendChild(text);
});
