import json
import uuid
import os

# ---- Utility Functions ----

def save_data(filename, data):
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)

def load_data(filename):
    if not os.path.exists(filename):
        return {}
    with open(filename, 'r') as f:
        return json.load(f)

# ---- Data Files ----

USERS_FILE = 'users.json'
PRODUCTS_FILE = 'products.json'
ORDERS_FILE = 'orders.json'

# ---- Classes ----

class User:
    def __init__(self, username, password):
        self.username = username
        self.password = password

    def register(self):
        users = load_data(USERS_FILE)
        if self.username in users:
            print("⚠️ User already exists.")
        else:
            users[self.username] = {"password": self.password, "cart": []}
            save_data(USERS_FILE, users)
            print("✅ Registration successful!")

    def login(self):
        users = load_data(USERS_FILE)
        if users.get(self.username, {}).get("password") == self.password:
            print("✅ Login successful!")
            return True
        print("❌ Invalid credentials.")
        return False

class Product:
    def __init__(self, name, price, stock):
        self.id = str(uuid.uuid4())
        self.name = name
        self.price = price
        self.stock = stock

    def add_product(self):
        products = load_data(PRODUCTS_FILE)
        products[self.id] = {
            "name": self.name,
            "price": self.price,
            "stock": self.stock
        }
        save_data(PRODUCTS_FILE, products)
        print(f"🛍️ Product '{self.name}' added.")

class Store:
    def view_products(self):
        products = load_data(PRODUCTS_FILE)
        if not products:
            print("🚫 No products available.")
            return
        for pid, details in products.items():
            print(f"{pid[:6]} | {details['name']} - ₹{details['price']} (Stock: {details['stock']})")

    def add_to_cart(self, username, product_id, quantity):
        users = load_data(USERS_FILE)
        products = load_data(PRODUCTS_FILE)

        if product_id not in products:
            print("❌ Product not found.")
            return

        if products[product_id]['stock'] < quantity:
            print("⚠️ Not enough stock.")
            return

        users[username]['cart'].append({"product_id": product_id, "quantity": quantity})
        save_data(USERS_FILE, users)
        print("🛒 Added to cart.")

    def checkout(self, username):
        users = load_data(USERS_FILE)
        products = load_data(PRODUCTS_FILE)
        orders = load_data(ORDERS_FILE)

        cart = users[username]['cart']
        if not cart:
            print("🧺 Cart is empty.")
            return

        total = 0
        for item in cart:
            pid = item['product_id']
            qty = item['quantity']
            price = products[pid]['price']
            total += price * qty
            products[pid]['stock'] -= qty

        order_id = str(uuid.uuid4())
        orders[order_id] = {
            "username": username,
            "items": cart,
            "total": total
        }

        users[username]['cart'] = []
        save_data(USERS_FILE, users)
        save_data(PRODUCTS_FILE, products)
        save_data(ORDERS_FILE, orders)
        print(f"✅ Order placed successfully! Total: ₹{total}")

# ---- Admin Panel ----

def admin_menu():
    print("\n👤 Admin Panel")
    while True:
        choice = input("\n1. Add Product\n2. View Products\n3. Exit\n>> ")
        if choice == "1":
            name = input("Product name: ")
            price = float(input("Price: ₹"))
            stock = int(input("Stock: "))
            Product(name, price, stock).add_product()
        elif choice == "2":
            Store().view_products()
        elif choice == "3": 
            break
        else:
            print("❌ Invalid choice.")

# ---- User Flow ----

def user_menu(username):
    store = Store()
    while True:
        print(f"\nWelcome, {username}!")
        choice = input("1. View Products\n2. Add to Cart\n3. Checkout\n4. Logout\n>> ")
        if choice == "1":
            store.view_products()
        elif choice == "2":
            pid = input("Enter Product ID (first 6 chars): ")
            products = load_data(PRODUCTS_FILE)
            for full_id in products:
                if full_id.startswith(pid):
                    qty = int(input("Quantity: "))
                    store.add_to_cart(username, full_id, qty)
                    break
            else:
                print("❌ Product ID not found.")
        elif choice == "3":
            store.checkout(username)
        elif choice == "4":
            break
        else:
            print("❌ Invalid option.")
