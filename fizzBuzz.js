// challenge: the classic "FizzBuzz" -
// for any given integer, write a script that logs the
// integers from 1 to it... but instead logs "Fizz" for
// multiples of three, "Buzz" for multiples of five,
// and “FizzBuzz” for those integers that are multiples
// of both three AND five

function fizzBuzz (x) {
    for (let i = 1; i <= x; i++) {
        if (i%15 === 0) {
            console.log("FizzBuzz");
        }
        else if ((i%5 === 0) && (i%3 != 0)) {
            console.log("Fizz");
        }
        else if ((i%3 === 0) && (i%5 != 0)) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
};

fizzBuzz(20);

// above: iterate over list of integers -
// 1 to, and including, the given integer,
// specifying distinct log statements for those
// A) with no remainder after division by 15,
// B) after division by 5 (explicitly excluding
// those cases where it's also evenly
// divisible by 3), AND
// C) after division by 3, (explicitly excluding
// those cases where it's also evenly
// divisible by 5)...
// DON'T FORGET TO INCLUDE logging of those
// integers that are not evenly divisible by
// either 3 or 5 (or 3 AND 5). 