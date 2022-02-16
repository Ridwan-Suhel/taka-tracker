function expensesFunction() {
  // expenses
  const foodInput = document.getElementById("food-input");
  const foodExpenses = parseFloat(foodInput.value);

  const rentInput = document.getElementById("rent-input");
  const rentExpenses = parseFloat(rentInput.value);

  const clothInput = document.getElementById("cloth-input");
  const clothExpenses = parseFloat(clothInput.value);

  // total expenses amount
  const expenses = foodExpenses + rentExpenses + clothExpenses;
  const expensesText = document.getElementById("total-expenses");
  expensesText.innerText = expenses;
  const totalExpenses = parseFloat(expensesText.innerText);

  if (foodInput.value < 0) {
    document.getElementById("food-alert").innerText =
      "Please Use a positive amount of food Expense";
    document.getElementById("food-alert").style.color = "tomato";
  } else if (rentInput.value < 0) {
    document.getElementById("rent-alert").innerText =
      "Please Use a positive amount of rent Expense";
    document.getElementById("rent-alert").style.color = "tomato";
  } else if (clothInput.value < 0) {
    document.getElementById("cloth-alert").innerText =
      "Please Use a positive amount of clothes Expense";
    document.getElementById("cloth-alert").style.color = "tomato";
  } else {
    document.getElementById("food-alert").innerText = "";
    document.getElementById("rent-alert").innerText = "";
    document.getElementById("cloth-alert").innerText = "";

    return totalExpenses;
  }
}

// updating balance
function updatingBalance() {
  // income input
  const incomeInput = document.getElementById("income-input");
  const income = parseFloat(incomeInput.value);
  // balance amount
  const balance = income - expensesFunction();
  const balanceText = document.getElementById("balance");
  balanceText.innerText = balance;

  const balanceAmount = parseFloat(balanceText.innerText);
  return balanceAmount;
}

// calculate income and expenses event
document.getElementById("calc-btn").addEventListener("click", function () {
  expensesFunction(); // total expenses

  updatingBalance(); // updating balance
});

// saving amount event
document.getElementById("save-btn").addEventListener("click", function () {
  // income
  const incomeInput = document.getElementById("income-input");
  const income = parseFloat(incomeInput.value);

  // save amount
  const saveInput = document.getElementById("save-input");
  const save = parseFloat(saveInput.value);

  const saveAmount = (income * save) / 100;
  const savingText = document.getElementById("save-amount");
  savingText.innerText = saveAmount;
  const saving = parseInt(savingText.innerText);

  // remaining-balance
  const remainingAmount = updatingBalance() - saving;

  const remaining = document.getElementById("remaining-balance");
  remaining.innerText = remainingAmount;
});
