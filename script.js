let balance = 1000;

function updateDisplay() {
  document.getElementById("balance").textContent = "ยอดเงิน: ฿" + balance;
}

function handleTransaction() {
  const operation = document.getElementById("operation").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (isNaN(amount) || amount <= 0) {
    alert("กรุณากรอกจำนวนเงินให้ถูกต้อง");
    return;
  }

  if (operation === "deposit") {
    balance += amount;
    alert("ฝากเงินเรียบร้อย");
  } else if (operation === "withdraw") {
    if (amount > balance) {
      alert("ยอดเงินไม่เพียงพอ");
      return;
    }
    balance -= amount;
    alert("ถอนเงินเรียบร้อย");
  }

  updateDisplay();
  document.getElementById("amount").value = "";
}

updateDisplay();
