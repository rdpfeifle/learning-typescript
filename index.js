"use strict";
exports.__esModule = true;
// importing products from products.ts file
var products_1 = require("./products");
var productName = "fanny pack";
// find a product that matches the productName and save a variable called "product"
var product = products_1["default"].filter(function (product) {
  return product.name === productName;
})[0];
console.log(product);
if (product.preOrder === true) {
  console.log(
    "We'll send you a message when your product it's on the way. Thanks for purchasing with us!"
  );
}
var shipping;
var taxPercent;
var taxTotal;
var total;
// annotate shippingAddress as a string
var shippingAddress = "575 Broadway, New York City, New York";
// if the price is greater than $25, the shipping will be free
// otherwise, the shipping fee will be $5
if (product.price > 25) {
  shipping = 0;
  console.log("We provide free shipping for this product.");
} else {
  shipping = 5;
}
// if the shipping address contains 'New York', the taxPercent needs to be set to 0.1 (10%).
// otherwise, it should be .05 (5%)
// .match() method is mostly used for regular expressions (Regex), but it works for our cause too!
if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;

console.log("The tax total is ".concat(taxTotal));
console.log("The total is ".concat(total));
console.log();

console.log(
  "The product you are buying is "
    .concat(productName, ", your shipping address is ")
    .concat(shippingAddress, ". The price of the product before taxes is $")
    .concat(product.price, ", the actual tax total is $")
    .concat(taxTotal, ", shipping cost is $")
    .concat(shipping, " and total amount of your purchase is $")
    .concat(total, ".")
);
