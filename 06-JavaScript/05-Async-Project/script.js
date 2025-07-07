function getUserinfo() {
    return new Promise(function (res, rej) {
        res({ id: 1, name: "Aditya"})
    });
}

getUserinfo().then(function (data){
    console.log(data);
})