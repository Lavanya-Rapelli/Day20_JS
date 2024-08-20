function Rectangle(length, width) {
    this.length = length;
    this.width = width;

    this.area = function() {
        return this.length * this.width;
    };

    this.perimeter = function() {
        return 2 * (this.length + this.width);
    };
}

const rect = new Rectangle(5, 10);

console.log("Area:", rect.area());       
console.log("Perimeter:", rect.perimeter());


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

function calculateSalesTotals(sales) {
    return sales.map(product => {
        const discount = product.discount || 0;
        const salePrice = product.original * (1 - discount);
        const totalPrice = salePrice * product.stock;
        
        return {
            ...product,
            sale: salePrice,
            total: totalPrice
        };
    });
}

// Example usage:
var sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];

const updatedSales = calculateSalesTotals(sales);
console.log(updatedSales);
