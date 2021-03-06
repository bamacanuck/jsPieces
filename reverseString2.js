// challenge: for any given string, write a script to return its
// "reverse" (a string with the same characters in the given string,
// but in reverse order)... this time, we'll avoid using the
// built-in reverse method for arrays

// example function call is with string "tomorrow" 

function reverse (str) {
    var rev = '';

    for (var i = 0; i < str.length; i++) {
        rev = str[i] + rev;
        // *** importantly NOT *** as noted below
        // rev = rev + str[i];
    } 
    // return rev;
    console.log(rev);
}

// =====================================

// above: creates empty string called rev, then adds the characters
// from the given string str, one at a time... this results in
// "reversal," because the new value of rev results from the
// looped action of
// str[i] + rev
// *** rather than ***
// rev + str[i]

// =====================================
// below: "my DUH explainer" 
// =====================================

// function reverse (str) {
//     let rev = "";
//     // for (char of str) {
//     //     rev = char + rev;
//     // }

//     console.log(str[0]);
//     rev = str[0] + rev;
//     console.log(rev);
//     console.log(str[1]);
//     rev = str[1] + rev;
//     console.log(rev);
//     console.log(str[2]);
//     rev = str[2] + rev;

//     console.log(rev);
//     // return rev;
// }

// =====================================
// or... in ES6, below

// function reverse (str) {
//     let rev = '';

//     for (let char of str) {
//         rev = char + rev;
//     } 
//     // return rev;
//     console.log(rev);
// }

// =====================================

// below: example use of function

reverse("tomorrow");

// ====================================

// below: standard return (non-console-log) version

// function reverse (str) {
//     var rev = '';

//     for (var i = 0; i < str.length; i++) {
//         rev = str[i] + rev;
//         // *** importantly NOT *** as noted below
//         // rev = rev + str[i];
//     } 
//     return rev;
//     // console.log(rev);
// }
