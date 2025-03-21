
const price = 19.5;
let cid = [
    ["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
    ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]
];

document.getElementById("purchase-btn").addEventListener("click", function() {
    const cash = parseFloat(document.getElementById("cash").value);
    const changeDue = document.getElementById("change-due");

    if (isNaN(cash) || cash < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    }

    if (cash === price) {
        changeDue.textContent = "No change due - customer paid with exact cash";
        return;
    }

    let change = cash - price;
    let totalCid = cid.reduce((sum, curr) => sum + curr[1], 0).toFixed(2);

    if (parseFloat(totalCid) < change) {
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    if (parseFloat(totalCid) === change) {
        // Pour le cas où la monnaie dans le tiroir de caisse est exactement égale à la monnaie due
        changeDue.textContent = `Status: CLOSED ${cid.filter(item => item[1] > 0).map(item => `${item[0]}: $${item[1].toFixed(2)}`).join(" ")}`;
        return;
    }

    let changeArr = [];
    const currencyUnits = { "PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100 };

    // Trier les pièces et billets du plus grand au plus petit
    cid = cid.sort((a, b) => currencyUnits[b[0]] - currencyUnits[a[0]]);

    for (let i = 0; i < cid.length; i++) {
        let [unit, amount] = cid[i];
        let unitValue = currencyUnits[unit];
        let amountToGive = 0;

        while (change >= unitValue && amount > 0) {
            change -= unitValue;
            amount -= unitValue;
            amountToGive += unitValue;
            change = Math.round(change * 100) / 100;  // Correction de l'arrondi pour éviter les erreurs de précision
        }

        if (amountToGive > 0) {
            changeArr.push(`${unit}: $${amountToGive.toFixed(2)}`);
        }
    }

    if (change > 0) {
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    } else {
        changeDue.textContent = `Status: OPEN ${changeArr.join(" ")}`;
    }
    
});