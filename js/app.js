function expensesFunction() {
  // income input
  const incomeInput = document.getElementById("income-input");
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

  if (foodInput.value < 0 || rentInput.value < 0 || clothInput.value < 0) {
    // expenses input alert
    document.getElementById("expense-alert").innerText =
      "Please Use positive amount of Expense";
    document.getElementById("expense-alert").style.color = "tomato";

    // expense amount err msg
    document.getElementById("total-expenses").innerText =
      "Oops! Something Wrong.";
    document.getElementById("total-expenses").style.color = "tomato";

    // balance amount err msg
    document.getElementById("oops-msg").style.display = "inline-block";
    document.getElementById("oops-msg").style.color = "tomato";
    document.getElementById("balance").style.display = "none";
  } else if (
    foodInput.value == "" ||
    rentInput.value == "" ||
    clothInput.value == ""
  ) {
    // expenses input alert
    document.getElementById("expense-alert").innerText =
      "Please fill up the input by valid number";
    document.getElementById("expense-alert").style.color = "tomato";

    // expense amount err msg
    document.getElementById("total-expenses").innerText =
      "Oops! Something Wrong.";
    document.getElementById("total-expenses").style.color = "tomato";

    // balance amount err msg
    document.getElementById("oops-msg").style.display = "inline-block";
    document.getElementById("oops-msg").style.color = "tomato";
    document.getElementById("balance").style.display = "none";
  } else if (totalExpenses > incomeInput.value) {
    document.getElementById("total-expenses").innerText =
      expenses + " - Expense is Higher!";
    document.getElementById("total-expenses").style.color = "tomato";
    // balance amount err msg
    document.getElementById("nothingShow").style.display = "inline-block";
    document.getElementById("nothingShow").style.color = "tomato";
    document.getElementById("balance").style.display = "none";
  } else {
    // expense alert msg
    document.getElementById("expense-alert").innerText = "";
    document.getElementById("total-expenses").style.color = "#333";

    //balance alert msg
    // balance amount err msg
    document.getElementById("oops-msg").style.display = "none";
    document.getElementById("balance").style.display = "inline-block";
    document.getElementById("nothingShow").style.display = "none";

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

  if (incomeInput.value < 0) {
    // income input alert
    document.getElementById("income-alert").innerText =
      "Please Use positive amount of Income number";
    document.getElementById("income-alert").style.color = "tomato";

    // balance amount err msg
    document.getElementById("balance").innerText = "Oops! Something Wrong.";
    document.getElementById("balance").style.color = "tomato";
  } else if (incomeInput.value == "") {
    // income input alert
    document.getElementById("income-alert").innerText =
      "Please fill up the input by valid number";
    document.getElementById("income-alert").style.color = "tomato";

    // balance amount err msg
    document.getElementById("balance").innerText = "Oops! Something Wrong.";
    document.getElementById("balance").style.color = "tomato";

    document.getElementById("nothingShow").style.display = "none";
  } else {
    document.getElementById("income-alert").innerText = "";
    document.getElementById("balance").style.color = "#333";
    return balanceAmount;
  }
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
