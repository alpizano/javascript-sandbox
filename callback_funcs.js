let logCall = function() {
    console.log("Defined function");
}

// setTimeout is async
// setTimeout(logCall, 5000);

// setTimeout(function() {
//     console.log("Anon. function");
// }, 1000);

const testCallback = function(num, cb) {
        setTimeout(function() {
            console.log("Running the 0st function");
            // call this after first finishes
            cb();
        }, num);
}

testCallback(3000, function() {setTimeout( () => { console.log("Running 1nd/Callback function")
},0)
});

const myPromise = new Promise((resolve, reject) => {

});