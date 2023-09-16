// Mobile-Hamburger-Code
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

//drop option code for other project
document.addEventListener("DOMContentLoaded", () => {
  const projectDropdown = document.getElementById("projectDropdown");

  projectDropdown.addEventListener("change", () => {
    const selectedValue = projectDropdown.value;
    if (selectedValue !== "#") {
      window.open(selectedValue, "_blank");
    }
  });
});

//  Mobile-Carousel-Code

var images, arrayimage;

images = [
  "https://images.unsplash.com/photo-1679312995862-b6a43db982d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1623491351896-073b656b4205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "https://plus.unsplash.com/premium_photo-1674049760153-144f4dc9208c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDcyfGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1670672950186-06319ae47429?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0N3xhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1665095111931-fc4fa813e21c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwN3xhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1654267288787-a571aecf0505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0M3xhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1588588256701-69dcfe4043c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5OHxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1646148707098-a27b818d5c95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDcxOXxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
];
let element_showing_image = document.getElementById("showing-image");
arrayimage = images.shift();
element_showing_image.setAttribute("src", arrayimage);
images.push(arrayimage);

document.getElementById("next-btn").addEventListener("click", (event) => {
  let element_showing_image2 = document.getElementById("showing-image");
  arrayimage = images.shift();
  element_showing_image2.setAttribute("src", arrayimage);
  images.push(arrayimage);
});

document.getElementById("previous-btn").addEventListener("click", (event) => {
  let element_showing_image3 = document.getElementById("showing-image");
  arrayimage = images.pop();
  element_showing_image3.setAttribute("src", arrayimage);
  images.unshift(arrayimage);
});

// Desktop-Carousel-Code

var slides = document.querySelectorAll(".slide");
var currentSlide = 0;
var timer;
function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[currentSlide].classList.add("active");
}
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide();
}

function previousSlide() {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide();
}

document.getElementById("forward").addEventListener("click", nextSlide);
document.getElementById("back").addEventListener("click", previousSlide);

function autoForward() {
  timer = setInterval(nextSlide, 1000);
}

function autoBack() {
  timer = setInterval(previousSlide, 1000);
}
function stopAuto() {
  clearInterval(timer);
}

document.getElementById("auto-forward").addEventListener("click", autoForward);
document.getElementById("auto-back").addEventListener("click", autoBack);
document.getElementById("stop").addEventListener("click", stopAuto);

//  Earning and Expenses Code

var earnings, input_value, expenses, balance, earning_total, expenses_total;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value;
  } else {
    return number_value;
  }
}

earnings = [];
expenses = [];
balance = [];
earning_total = 0;
expenses_total = 0;

// Desktop-code continuation of earnings and expenses
document.getElementById("button").addEventListener("click", (event) => {
  input_value = getNumberOrString(document.getElementById("input").value);
  if (input_value > 0) {
    earnings.unshift(input_value);
    let element_earnings_list = document.getElementById("earnings-list");
    let new_li = document.createElement("li");
    let new_span = document.createElement("span");
    new_span.innerText = earnings.reduce((a, b) => a + b, 0);
    new_li.appendChild(new_span);
    element_earnings_list.appendChild(new_li);
  }
  let element_earn_total = document.getElementById("earn-total");
  element_earn_total.innerText = earnings.reduce((a, b) => a + b, 0);
});

// mobile-code continuation of earnings and expenses

document.getElementById("button-mo").addEventListener("click", (event) => {
  input_value = getNumberOrString(document.getElementById("input-mo").value);
  if (input_value > 0) {
    earnings.unshift(input_value);
    let element_earnings_list = document.getElementById("earnings-list-mo");
    let new_li = document.createElement("li");
    let new_span = document.createElement("span");
    new_span.innerText = earnings.reduce((a, b) => a + b, 0);

    new_li.appendChild(new_span);

    element_earnings_list.appendChild(new_li);
  }
  let element_earn_total = document.getElementById("earn-total-mo");
  element_earn_total.innerText = earnings.reduce((a, b) => a + b, 0);
});
//  Desktop-code continuation of earnings and expenses
document.getElementById("button").addEventListener("click", (event) => {
  input_value = getNumberOrString(document.getElementById("input").value);
  if (input_value < 0) {
    expenses.unshift(input_value);
    let element_expenses_list = document.getElementById("expenses-list");
    let new_li2 = document.createElement("li");
    let new_span2 = document.createElement("span");
    new_span2.innerText = expenses.reduce((a, b) => a + b, 0);

    new_li2.appendChild(new_span2);

    element_expenses_list.appendChild(new_li2);
  }
  let element_expense_total = document.getElementById("expense-total");
  element_expense_total.innerText = expenses.reduce((a, b) => a + b, 0);
});

// mobile-code continuation of earnings and expenses

document.getElementById("button-mo").addEventListener("click", (event) => {
  input_value = getNumberOrString(document.getElementById("input-mo").value);
  if (input_value < 0) {
    expenses.unshift(input_value);
    let element_expenses_list = document.getElementById("expenses-list-mo");
    let new_li2 = document.createElement("li");
    let new_span2 = document.createElement("span");
    new_span2.innerText = expenses.reduce((a, b) => a + b, 0);

    new_li2.appendChild(new_span2);

    element_expenses_list.appendChild(new_li2);
  }
  let element_expense_total = document.getElementById("expense-total-mo");
  element_expense_total.innerText = expenses.reduce((a, b) => a + b, 0);
});

//  Desktop-Code continuation of earnings and expenses

document.getElementById("button").addEventListener("click", (event) => {
  balance.unshift(getNumberOrString(document.getElementById("input").value));
  let element_balance = document.getElementById("balance");
  element_balance.innerText = balance.reduce((a, b) => a + b, 0);
});

// mobile-code continuation of earnings and expenses

document.getElementById("button-mo").addEventListener("click", (event) => {
  balance.unshift(getNumberOrString(document.getElementById("input-mo").value));
  let element_balance = document.getElementById("balance-mo");
  element_balance.innerText = balance.reduce((a, b) => a + b, 0);
});

document.getElementById("clear-btn-mo").addEventListener("click", () => {
  // Clear input field value
  document.getElementById("input-mo").value = "0";

  // Clear earnings, expenses, and balance arrays
  earnings = [];
  expenses = [];
  balance = [];

  // Clear earnings and expenses lists
  document.getElementById("earnings-list-mo").innerHTML = "";
  document.getElementById("expenses-list-mo").innerHTML = "";

  // Reset total values to 0
  document.getElementById("earn-total-mo").innerText = "0";
  document.getElementById("expense-total-mo").innerText = "0";
  document.getElementById("balance-mo").innerText = "0";
});


//Shopping Code
var shopping_array, item, custom_item;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value;
  } else {
    return number_value;
  }
}

// Describe this function...
function reset_array() {
  if (--window.LoopTrap <= 0) throw "Infinite loop.";
  shopping_array = [];
}

// Describe this function...
function reset_list() {
  if (--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_shopping_list = document.getElementById("shopping-list");
  element_shopping_list.replaceChildren();
}
// Describe this function...
function build_shopping_list() {
  if (--window.LoopTrap <= 0) throw "Infinite loop.";
  shopping_array.forEach((item) => {
    let element_shopping_list2 = document.getElementById("shopping-list");
    let new_li = document.createElement("li");
    new_li.innerText = item;

    new_li.addEventListener("click", (event) => {
      new_li.setAttribute("class", "strikethrough");
    });
    element_shopping_list2.appendChild(new_li);
  });
}
// Describe this function...
function reset_build_list() {
  if (--window.LoopTrap <= 0) throw "Infinite loop.";
  reset_list();
  build_shopping_list();
}

reset_array();
document.getElementById("btn-eggs").addEventListener("click", (event) => {
  shopping_array.push("Eggs");
  reset_build_list();
});
document.getElementById("btn-bacon").addEventListener("click", (event) => {
  shopping_array.push("Bacon");
  reset_build_list();
});
document.getElementById("btn-bread").addEventListener("click", (event) => {
  shopping_array.push("Bread");
  reset_build_list();
});
document.getElementById("btn-other").addEventListener("click", (event) => {
  custom_item = getNumberOrString(
    document.getElementById("input-ingredients").value
  );
  if (custom_item != 0) {
    shopping_array.push(
      getNumberOrString(document.getElementById("input-ingredients").value)
    );
    reset_build_list();
  }
});
document.getElementById("btn-remove").addEventListener("click", (event) => {
  shopping_array.pop();
  reset_build_list();
});
document.getElementById("btn-reset").addEventListener("click", (event) => {
  reset_array();
  reset_list();
});

//desktop-code digital clock

let date = document.getElementById("date");
let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");

setInterval(() => {
  let currentTime = new Date();
  let options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  date.innerHTML = currentTime.toLocaleDateString(undefined, options);
  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  mins.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

//desktop-code pet

const petApiUrl = "https://learnwebcode.github.io/pet-adoption-data/pets.json";

async function getRandomPet() {
  try {
    const response = await fetch(petApiUrl);
    const data = await response.json();

    // Check if the necessary properties exist in the fetched data
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("No pet data found.");
    }

    // Get a random pet from the data array
    const randomPet = data[Math.floor(Math.random() * data.length)];

    const petImage = randomPet.photo;
    const petDescription = randomPet.description;
    const petName = randomPet.name;

    document.getElementById("petImage").src = petImage;
    document.getElementById("petName").textContent = petName;
    document.getElementById("petDescription").textContent = petDescription;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

document.getElementById("randomButton").addEventListener("click", getRandomPet);



//mobile-calendar-code
const dates = document.getElementById("dates");
const days = document.getElementById("days");
const month = document.getElementById("months");
const year = document.getElementById("years");

const today = new Date();

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

dates.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
days.innerHTML = weekDays[today.getDay()];
months.innerHTML = allMonths[today.getMonth()];
years.innerHTML = today.getFullYear();





