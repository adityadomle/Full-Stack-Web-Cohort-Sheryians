function clouser(fn) {
    setTimeout(fn, 4000);
}

clouser(function(){
    console.log("Hello, World!");
    
})