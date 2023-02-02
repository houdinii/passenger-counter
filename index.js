// document.getElementById("count-el").innerText = String(5);
let count = 0;
let previousEntries = "Previous entries: "
const displayCount = () => document.getElementById("count-el").textContent = String(count);

displayCount();

function increment(amount= 1) {
  count += amount;
  displayCount();
}

function resetCount(){
  count = 0;
  displayCount();
}

function save() {
  previousEntries += String(count) + " - ";
  document.getElementById("previous").textContent = previousEntries;
  resetCount();
}

function clearClick() {
  previousEntries = "Previous entries: "
  document.getElementById("previous").innerHTML = "";
  resetCount();
}