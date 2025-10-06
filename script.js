let accountBalance = 0;
let cashBalance = 0;

function setBalance() {
  const acc = parseFloat(document.getElementById("accountBalance").value) || 0;
  const cash = parseFloat(document.getElementById("cashBalance").value) || 0;
  accountBalance = acc;
  cashBalance = cash;
  addHistory(`✅ Set balances: Account = ${acc}, Cash = ${cash}`);
}

function deposit() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }
  accountBalance += amount;
  addHistory(`💰 Deposit: +${amount} | New Account Balance = ${accountBalance}`);
}

function withdraw() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }
  if (amount > accountBalance) {
    alert("Insufficient funds!");
    return;
  }
  accountBalance -= amount;
  addHistory(`💸 Withdraw: -${amount} | New Account Balance = ${accountBalance}`);
}

function addHistory(text) {
  const historyBox = document.getElementById("history");
  historyBox.value += text + "\n";
  historyBox.scrollTop = historyBox.scrollHeight;
}
