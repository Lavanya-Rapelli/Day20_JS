// # Problem 2

// ### **Products Cart Object**

// - Given an input of products in the below format (Name Quantity Price)
// - Input

// ```
// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]

// ```

// - Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
// - The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
// - Sample output for the above case `290`


function ProductsCart(names, quantities, prices) {
    this.data = names.map((name, index) => ({
        name: name,
        quantity: quantities[index],
        price: prices[index]
    }));

    this.total = function() {
        return this.data.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    };
}


const names = ["Rice", "Dal", "Salt"];
const quantities = [2, 3, 1];
const prices = [60, 50, 20];

const cart = new ProductsCart(names, quantities, prices);

console.log("Cart Data:", cart.data);
