function Employee(name, age, id, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.id = id;
}

Employee.prototype.printDetails = function () {
    console.log(
        `${this.name} is my name I am ${this.age} years old and my id is ${this.id} and my salary is ${this.salary}`
    );

};

let e1 = new Employee("Aditya", 20, 1234, 75000); 
e1.printDetails(); 