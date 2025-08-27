const lifeCount = document.getElementById("life-count");
const lifeOneUps = document.querySelectorAll(".life-one-up");

document.querySelector("main").addEventListener("click", (e) => {
  switch (true) {
    case e.target.classList.contains("life-one-up"):
      lifeCount.textContent = parseInt(lifeCount.textContent) + 1;
      break;
    default:
      console.log("Not my monkey, Not my circus!");
      break;
  }
});
