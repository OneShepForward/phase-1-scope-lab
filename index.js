// 1.
var customerName = 'bob';
// console.log(customerName);
// console.log(customerName.toUpperCase());

// 2.
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

// 3.
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// 4.
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// 5.
const leastFavoriteCustomer = 'nick';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob';
}