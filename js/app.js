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

  return totalExpenses;
}

// updating balance
function updatingBalance() {
  // income input
  const incomeInput = document.getElementById("income-input");
  const income = parseFloat(incomeInput.value);
  //   balance amount
  const balance = income - expensesFunction();
  const balanceText = document.getElementById("balance");
  balanceText.innerText = balance;

  const balanceAmount = parseFloat(balanceText.innerText);
  return balanceAmount;
}

// calculating income and expenses
document.getElementById("calc-btn").addEventListener("click", function () {
  // total expense
  expensesFunction();

  // updating balance
  updatingBalance();
});

// amount save listener
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
