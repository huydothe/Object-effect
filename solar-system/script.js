const ball = document.getElementsByClassName("ball");
const star = document.getElementsByClassName("star");

for (let i = 0; i < ball.length; i++) {
  ball[i].style.width = `${i + 1}0%`;
  ball[i].style.height = `${i + 1}0%`;
}

