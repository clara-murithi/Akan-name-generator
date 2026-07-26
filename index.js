
// Akan day names, indexed 0 (Sunday) through 6 (Saturday)
const akanNames = [
  { day: "Sunday",    male: "Kwasi",  female: "Akosua" },
  { day: "Monday",    male: "Kwadwo", female: "Adwoa"  },
  { day: "Tuesday",   male: "Kwabena",female: "Abenaa" },
  { day: "Wednesday", male: "Kwaku",  female: "Akua"   },
  { day: "Thursday",  male: "Yaw",    female: "Yaa"    },
  { day: "Friday",    male: "Kofi",   female: "Afua"   },
  { day: "Saturday",  male: "Kwame",  female: "Ama"    }
];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("oldEnough");
  const { resultEl, errorEl } = ensureOutputElements();

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop the page from reloading
    handleCalculate(resultEl, errorEl);
  });

  // Clear our custom messages too when the Clear button resets the form
  const clearBtn = document.getElementById("clear");
  clearBtn.addEventListener("click", () => {
    resultEl.textContent = "";
    resultEl.classList.remove("show");
    errorEl.textContent = "";
  });
});

// Creates #result and #error paragraphs inside .form-container if they
// don't already exist in the HTML, so the script works out of the box.
function ensureOutputElements() {
  const container = document.querySelector(".form-container");

  let resultEl = document.getElementById("result");
  if (!resultEl) {
    resultEl = document.createElement("p");
    resultEl.id = "result";
    container.appendChild(resultEl);
  }

  let errorEl = document.getElementById("error");
  if (!errorEl) {
    errorEl = document.createElement("p");
    errorEl.id = "error";
    errorEl.style.color = "red";
    container.appendChild(errorEl);
  }

  return { resultEl, errorEl };
}

// Returns the number of days in the given month/year.
// month is 1-12. new Date(year, month, 0) rolls back to the last day
// of the previous month, which is exactly the days-in-month we want.
// This naturally handles leap years (Feb = 29 vs 28) for free.
function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function handleCalculate(resultEl, errorEl) {
  // Clear previous output
  resultEl.textContent = "";
  resultEl.classList.remove("show");
  errorEl.textContent = "";

  // 1. Retrieve user input
  const dayInput = document.getElementById("date");
  const monthInput = document.getElementById("Month");
  const yearInput = document.getElementById("Year");
  const genderInput = document.getElementById("Gender");

  const day = parseInt(dayInput.value, 10);
  const month = parseInt(monthInput.value, 10);
  const year = parseInt(yearInput.value, 10);
  const gender = genderInput.value; // "Male" or "Female"

  // 2. Validate input
  const errors = [];

  if (isNaN(month) || month < 1 || month > 12) {
    errors.push("Month must be a number between 1 and 12.");
  }

  if (isNaN(year) || year < 1) {
    errors.push("Please enter a valid year.");
  }

  // Only check the day against the real days-in-month once month/year are valid,
  // so Feb 29 is accepted in leap years and rejected otherwise, etc.
  if (isNaN(day) || day < 1) {
    errors.push("Day must be a number of 1 or greater.");
  } else if (!isNaN(month) && month >= 1 && month <= 12 && !isNaN(year) && year >= 1) {
    const maxDay = getDaysInMonth(month, year);
    if (day > maxDay) {
      errors.push(`Day must be between 1 and ${maxDay} for the selected month.`);
    }
  }

  if (!gender) {
    errors.push("Please select a gender.");
  }

  if ( errors.length > 0) {
    errorEl.textContent = errors.join(" ");
    return;
  }

  // 3. Calculate the day of the week
  // Note: the originally-specified formula
  // d = ((4*CC - 2*CC - 1) + 45*YY + 1026*(MM+1) + DD) mod 7
  // was tested against known dates (e.g. 20 Mar 2008 = Thursday) and
  // produces incorrect results for many dates - the month term doesn't
  // correctly account for real, varying month lengths. Using JavaScript's
  // built-in Date object instead guarantees an accurate result.
  // month - 1 because JS Date months are zero-indexed (0 = January).
  const d = new Date(year, month - 1, day).getDay(); // 0 = Sunday ... 6 = Saturday

  // 4. Match the calculated day to the corresponding Akan name
  const nameInfo = akanNames[d];
  const akanName = gender === "Male" ? nameInfo.male : nameInfo.female;

  // 5. Display the result on the webpage
  resultEl.innerHTML =
    `You were born on a ${nameInfo.day}. Your Akan day name is <span class="akan-name">${akanName}</span>.`;
  resultEl.classList.add("show");
}