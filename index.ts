import products from "./products";

const productName: string = "shirt";

const product = products.filter((product) => product.name === productName)[0];

console.log(product);

if (product.preOrder === true) {
  console.log(
    "We'll send you a message when your product it's on the way. Thanks for purchasing with us!"
  );
}

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

const shippingAddress: string = "575 Broadway, New York City, New York";

if (product.price > 25) {
  shipping = 0;
  console.log("We provide free shipping for this product.");
} else {
  shipping = 5;
}
