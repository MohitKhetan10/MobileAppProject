// Selecting Elements
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");
const countdown = document.getElementById("countdown");
const ageGameBtn = document.getElementById("ageGameBtn");
const ageGameOutput = document.getElementById("ageGameOutput");

// Event Listener for User Input
submitBtn.addEventListener("click", () => {
    let userName = nameInput.value;
    let userAge = parseInt(ageInput.value);

    if (userName === "" || isNaN(userAge)) {
        output.innerHTML = "⚠️ Please enter a valid name and age!";
        return;
    }

    // Operators: Calculate Next Year's Age
    let nextYearAge = userAge + 1;

    // Control Statements: Check Age Group
    let ageCategory = userAge >= 18 ? "You are an adult! 🎉" : "You are a minor! 🚀";

    // Display Output
    output.innerHTML = `
        <strong>Welcome, ${userName}!</strong> <br>
        You are currently ${userAge} years old. <br>
        Next year, you will be ${nextYearAge} years old! <br>
        ${ageCategory}
    `;

    // Start Countdown to Next Birthday
    startCountdown(5);
});

// Loop Example: Countdown Animation
function startCountdown(seconds) {
    countdown.innerHTML = `⏳ ${seconds} seconds left...`;
    let timer = setInterval(() => {
        seconds--;
        if (seconds > 0) {
            countdown.innerHTML = `⏳ ${seconds} seconds left...`;
        } else {
            countdown.innerHTML = "🎂 Happy Birthday in Advance! 🎉";
            clearInterval(timer);
        }
    }, 1000);
}

// Fun Age Prediction Game
ageGameBtn.addEventListener("click", () => {
    let userAge = parseInt(ageInput.value);
    if (isNaN(userAge)) {
        ageGameOutput.innerHTML = "⚠️ Please enter your age first!";
        return;
    }

    let randomFactor = Math.floor(Math.random() * 5) + 1; // Random number between 1-5
    let predictedAge = userAge + randomFactor;

    ageGameOutput.innerHTML = `🔮 In 5 years, you could be ${predictedAge} years old! 🤯`;
});

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
});
