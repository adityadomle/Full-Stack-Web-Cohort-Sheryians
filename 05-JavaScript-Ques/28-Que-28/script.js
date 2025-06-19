function greet(greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);

    }
}

var greetingfnc = greet("Hello");
greetingfnc("Aditya");
greetingfnc("Aadi");
greetingfnc("Aditi");
greetingfnc("Ayush");