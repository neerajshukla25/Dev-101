// console.log("hello world");

var log = console.log

// log("hello neeru");


// array
var arr = [1, 2.5, undefined, null, function num() { log("hello world"); }, [1, 2, 3, 4, 5], "hello neeru"]

// log(arr[5]);

// primitive datatypes = number , string , null , undefined 

// function print(newString){

//     log(newString);
// }

// print("Hello world !!!");

// dec to binary convert
function funn(num) {
    var Bin = 0;
    var pow = 1;
    while (num != 0) {
        var rem = num % 2;
        Bin += rem * pow;
        pow = pow * 10;
        num = Math.floor(num / 2);
    }
    return Bin;
}

// log(funn(13));


// n numbers 20;
// i divide ho skta h 3 se to console.log("fizz");
// i divide ho skta h 5 se to console.log("Buzz");
// i divide 3 se bhi 5 se bhi to console.log("FizzBuzz");
// else console.log(i);

function fun(num) {
    for (var i = 1; i <= 20; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
fun(20);
//bej rhi hu wifi vo tilt sign h okk


console.log("hello");