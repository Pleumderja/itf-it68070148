let accountBalance = 0;
let cashBalance = 0;

function setBalance() {
  accountBalance = Number(document.getElementById("accountBalance").value);
  cashBalance = Number(document.getElementById("cashBalance").value);
  addHistory("Set balances: Account = " + accountBalance + ", Cash = " + cashBalance);
}

function deposit() {
  let amount = Number(document.getElementById("amount").value);
  accountBalance += amount;
  addHistory("Deposit " + amount + " | New balance: " + accountBalance);
}

function withdraw() {
  let amount = Number(document.getElementById("amount").value);
  if (amount > accountBalance) {
    alert("Not enough balance!");
    return;
  }
  accountBalance -= amount;
  addHistory("Withdraw " + amount + " | New balance: " + accountBalance);
}

function convertCurrency() {
  let amount = Number(document.getElementById("inputAmount").value);
  let currency = document.getElementById("currency").value;
  let rate = 36.5;
  let result = 0;
  let output = "";

  if (currency === "USD") {
    result = amount * rate;
    output = "THB";
  } else {
    result = amount / rate;
    output = "USD";
  }

  document.getElementById("resultText").innerText =
    "Result: " + result.toFixed(2) + " " + output;
  addHistory("Convert " + amount + " " + currency + " → " + result.toFixed(2) + " " + output);
}

function addHistory(text) {
  let history = document.getElementById("history");
  history.value += text + "\n";
}
