function expensesFunction() {
  // expenses
  const foodInput = document.getElementById("food-input");
  const foodExpenses = parseFloat(foodInput.value);

  const rentInput = document.getElementById("rent-input");
  const rentExpenses = parseFloat(rentInput.value);

  const clothInput = document.getElementById("cloth-input");
  const clothExpenses = parseFloat(clothInput.value);

  // total expenses
  const expenses = foodExpenses + rentExpenses + clothExpenses;
  const expensesText = document.getElementById("total-expenses");
  expensesText.innerText = expenses;
  const totalExpenses = parseFloat(expensesText.innerText);

  return totalExpenses;
}

// calculating income and expenses
document.getElementById("calc-btn").addEventListener("click", function () {
  expensesFunction();
  // expenses
  const incomeInput = document.getElementById("income-input");
  const income = parseFloat(incomeInput.value);

  // updating balance
  const balance = income - expensesFunction();
  const balanceText = document.getElementById("balance");
  balanceText.innerText = balance;
});
