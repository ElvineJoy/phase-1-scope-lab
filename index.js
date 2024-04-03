// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName () {
   var nameCustomer = customerName.toUpperCase()
   customerName = nameCustomer
   console.log(customerName);
}    
// var customerName = upperCaseCustomerName('bob')
// console.log(customerName);

// third instruction
function setBestCustomer () {
    bestCustomer = "not bob";
}

// fourth
function overwriteBestCustomer () {
    bestCustomer = "maybe bob"
}

// last
const leastFavoriteCustomer = 'Me';

function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = 'Lin'
}
console.log(changeLeastFavoriteCustomer())