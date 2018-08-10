// challenge: the classic "FizzBuzz" -
// for any given integer, write a script that logs the
// integers from 1 to it... but instead logs "Fizz" for
// multiples of three, "Buzz" for multiples of five,
// and “FizzBuzz” for those integers that are multiples
// of both three AND five

function fizzBuzz (x) {
    for (let i = 1; i <= x; i++) {
        if (i%15 = 0) {
            console.log("FizzBuzz");
        }
        else if ((i%5 = 0) && (i%3 != 0)) {
            console.log("Fizz");
        }
        else if ((i%3 = 0) && (i%5 != 0)) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
};

fizzBuzz(50);