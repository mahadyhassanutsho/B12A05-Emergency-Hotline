// Elements
const lifeCountEl = document.getElementById("life-count");
const coinCountEl = document.getElementById("coin-count");
const callHistoryContainerEl = document.getElementById(
  "call-history-container"
);

// Handle All Clicks from `<main></main>`
document.querySelector("main").addEventListener("click", (e) => {
  switch (true) {
    // Handle Life
    case e.target.classList.contains("life-one-up"):
      lifeCountEl.textContent = parseInt(lifeCountEl.textContent) + 1;
      break;

    // Handle Call
    case e.target.classList.contains("call-one-up"):
      const coinBalance = parseInt(coinCountEl.textContent);
      const canCall = coinBalance >= 20;

      if (canCall) {
        const serviceData = {
          nameEn: e.target.getAttribute("data-service-name-en"),
          nameBn: e.target.getAttribute("data-service-name-bn"),
          number: e.target.getAttribute("data-service-number"),
        };

        //   Show Alert
        alert(
          `Calling '${serviceData.nameEn} (${serviceData.nameBn})' on (${serviceData.number}) . . .`
        );

        // Deduct 20 Coins
        coinCountEl.textContent = coinBalance - 20;

        // Add Call History
        callHistoryContainerEl.innerHTML += generateCallHistory(serviceData);
      } else {
        alert("Not enough coins!");
      }
      break;

    // Handle Clear Call History
    case e.target.id === "clear-call-history":
      callHistoryContainerEl.innerHTML = "";
      break;

    default:
      console.log("Not my monkey, Not my circus!");
      break;
  }
});

// Generate Call History
function generateCallHistory(serviceData) {
  const callTime = new Date().toLocaleTimeString();
  return `
	  <div
            class="flex items-center justify-between p-4 bg-[#f9f9f9] rounded-lg"
          >
            <div class="space-y-2">
              <p>${serviceData.nameBn}</p>
              <p>${serviceData.number}</p>
            </div>
            <p>${callTime}</p>
          </div>
	`;
}
