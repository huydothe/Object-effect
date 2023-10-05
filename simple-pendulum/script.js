const interboard = document.getElementById("interboard");
const pendulum = document.createElement("div");
pendulum.classList.add("pendulum");
interboard.appendChild(pendulum);
let isDragging = false;

const protractors = document.createElement("div");
const rope = document.createElement("div");
protractors.classList.add("protractors");
rope.classList.add("rope");
pendulum.appendChild(protractors);
pendulum.appendChild(rope);
const blockGeometry = document.createElement("div");
blockGeometry.classList.add("block");
pendulum.appendChild(blockGeometry);

for (let i = 1; i < 180; i++) {
  const division = document.createElement("div");
  division.classList.add("division");
  protractors.appendChild(division);
  division.style.transform = `rotate(${i}deg)`;
}

blockGeometry.addEventListener("mousedown", (e) => {
  isDragging = true;
  const originX = e.clientX;
  const offsetX = e.clientX - blockGeometry.getBoundingClientRect().left;
  const offsetY = e.clientY - blockGeometry.getBoundingClientRect().top;

  document.addEventListener("mousemove", onMouseMove);

  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", onMouseMove);
    isDragging = false;
  });

  function onMouseMove(e) {
    if (!isDragging) return;
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    blockGeometry.style.left = x + "px";
    blockGeometry.style.top = y + "px";
    const xChange = originX - x;
    const theta = Math.acos(xChange / y);
    const angleInDegrees = theta * (180 / Math.PI);
    console.log("angleInDegrees", angleInDegrees);
  }
});
