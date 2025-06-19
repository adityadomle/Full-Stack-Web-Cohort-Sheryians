function abcd(cb) {
    let executed = false;
    return function () {
        if (!executed) {
            executed = true;
            cb();
        }
    };
}

var newfn = abcd(function(){
    console.log("ran");  
});

newfn(); // 🔁 "ran" chalega
newfn(); // ❌ kuch nahi chalega
newfn(); // ❌ kuch nahi chalega
