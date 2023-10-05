const tracker = document.getElementById("image-tracker");
const images = tracker.getElementsByClassName("image");
tracker.dataset.percentage = "0";
tracker.dataset.mouseDownAt = "0";
tracker.dataset.prevPercentag = "0";

window.onmousedown = (e) => {
  tracker.dataset.mouseDownAt = e.clientX;
};

window.onmousemove = (e) => {
  if (tracker.dataset.mouseDownAt === "0") return;

  const mousePosition = parseFloat(tracker.dataset.mouseDownAt) - e.clientX;
  const maxDelta = window.innerWidth / 2;
  const percentage = (mousePosition / maxDelta) * 100;
  const nextPercentage =
    parseFloat(tracker.dataset.prevPercentage) + percentage;
  tracker.dataset.percentage = nextPercentage;
  console.log("nextPercentage", nextPercentage);
  if (nextPercentage <= 0) {
    return (tracker.style.transform = `translate(0%, -50%)`);
  } else if (nextPercentage >= 100) {
    return (tracker.style.transform = `translate(100%, -50%)`);
  } else {
    tracker.style.transform = `translate(${-nextPercentage}%, -50%)`;
    tracker.animate(
      {
        transform: `translate(${-nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
  for (const image of images) {
    if (nextPercentage >= 100) {
      return (image.style.objectPosition = `100% 50%`);
    } else if (nextPercentage <= 0) {
      return (image.style.objectPosition = `0% 50%`);
    } else {
      image.style.objectPosition = `${nextPercentage + 100}% 50%`;
      image.animate(
        {
          objectPosition: `${nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  }
};

window.onmouseup = () => {
  tracker.dataset.mouseDownAt = "0";
  tracker.dataset.prevPercentage = tracker.dataset.percentage;
};
