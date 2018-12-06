// challenge: for any given string, write a script to return its reverse
// (a string with the same characters in the given string,
// but in reverse order)

// example function call is with string "everyday"

function reverseIt (str) {
    var rev = str.split('').reverse().join('');
    // return rev;
    console.log(rev);
}

// above: splits given string into array of individual characters,
// using empty-string separator, uses reverse method for array,
// and joins the reversed array of characters,
// creating string "reversal"

// ====================================

// below: example use of function

reverseIt("everyday");

// ====================================

// below: standard return (non-console-log) version

// function reverseIt (str) {
//     var rev = str.split('').reverse().join('');
//     return rev;
//     // console.log(rev);
// }