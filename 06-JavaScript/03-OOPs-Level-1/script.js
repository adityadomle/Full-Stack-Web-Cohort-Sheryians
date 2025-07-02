function Toffee(flavour, price, expiry) {
    this.flavour = flavour;
    this.price = price; 
    this.expiry = expiry;
}

let t1 = new Toffee("mango", 10, "20-12-2025");
let t2 = new Toffee("vanila", 18, "20-11-2025");