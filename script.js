let accountBalance = 1000;
let cashBalance = 1000;

function setBalance() {
  accountBalance = parseFloat(document.getElementById("accountBalance").value) || accountBalance;
  cashBalance = parseFloat(document.getElementById("cashBalance").value) || cashBalance;
  addHistory(`Balances updated ➤ Account: ${accountBalance}, Cash: ${cashBalance}`);
}

function proceed() {
  const amount = parseFloat(document.getElementById("amount").value);
  const operation = document.getElementById("operation").value;

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  if (operation === "deposit") {
    accountBalance += amount;
    addHistory(`💰 Deposit ${amount} | New balance: ${accountBalance}`);
  } else if (operation === "withdraw") {
    if (amount > accountBalance) {
      alert("Insufficient funds!");
      return;
    }
    accountBalance -= amount;
    addHistory(`💸 Withdraw ${amount} | New balance: ${accountBalance}`);
  }
}

function addHistory(text) {
  const historyBox = document.getElementById("history");
  historyBox.value += text + "\n";
  historyBox.scrollTop = historyBox.scrollHeight;
}

/* Currency Converter */
function convertCurrency() {
  const amount = parseFloat(document.getElementById("inputAmount").value);
  const currency = document.getElementById("currency").value;
  const output = document.getElementById("outputAmount");

  if (isNaN(amount) || amount <= 0) {
    alert("Enter valid amount!");
    return;
  }

  let result = 0;
  const rate = 36.5; // THB per USD

  if (currency === "USD") result = amount * rate;
  else result = amount / rate;

  output.value = result.toFixed(2);
}
