"use strict";
var _a;
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
let employees = {
    id: 1,
    name: "eugy",
    retire: (date) => {
        console.log(date);
    },
};
let employee = {
    id: 1,
    name: "eugy",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name);
    else
        console.log('hola');
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=main.js.map