// task 1
const dashboardId = document.getElementById("dashboard"); // id
const dashboardQuery = document.querySelector("#dashboard"); // querySelector

// creating div element
const revenueCard = document.createElement("div"); // div element

// setting attributes
revenueCard.setAttribute("class", "metric-card"); // class atr
revenueCard.setAttribute("id", "revenue-card"); // id atr

// popluating the card
revenueCard.innerHTML = `
    <h3>Revenue</h3>
    <p>$0</p>
  `;

// appending new card
dashboardId.appendChild(revenueCard);

// task 2
const metricCards = document.querySelectorAll(".metric-card");

// converting it into an array
const metricCardsArray = [...metricCards];

// updating each cards inner text
metricCardsArray.forEach(card => {
  card.innerText += ' - Updated';
  card.style.backgroundColor = 'orange'; // Adding a background color
});