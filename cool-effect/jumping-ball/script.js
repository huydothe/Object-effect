const ballWrapper = document.getElementById("ball-wrapper");

for (let i = 0; i < 5; i++) {
  const ball = document.createElement("div");
  ball.classList.add("ball");
  ball.id = `${ball}_${i}`;
  ballWrapper.appendChild(ball);

  const elId = document.getElementById(`${ball}_${i}`);
  gsap.to(elId, {
    duration: 2.5,
    ease: "bounce.out",
    y: 405,
    delay: i * 0.2,
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });
}
