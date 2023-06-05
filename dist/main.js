"use strict";
let numbers = [];
let ages = [10, 23, 54, 5];
let user = ["eugy", 12];
let mySize = 6;
console.log(mySize);
function addNums(f, d = 3) {
    return f * d;
}
function calculateTax(income, taxYear) {
    if ((taxYear || 2022) < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(20000);
let employee = { id: 1,
    name: "eugy",
    retire: (date) => {
        console.log(date);
    }
};
//# sourceMappingURL=main.js.map