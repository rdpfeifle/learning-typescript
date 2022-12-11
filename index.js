"use strict";
exports.__esModule = true;
var products_1 = require("./products");
var productName = "shirt";
var product = products_1["default"].filter(function (product) { return product.name === productName; })[0];
console.log(product);
if (product.preOrder === true) {
    console.log("We'll send you a message when your product it's on the way. Thanks for purchasing with us!");
}
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = "575 Broadway, New York City, New York";
if (product.price > 25) {
    shipping = 0;
    console.log("We provide free shipping for this product.");
}
else {
    shipping = 5;
}
