// challenge: for any given string, write a script that will return
// true if it's a palindrome (the same with the characters reversed)

// example function calls are with strings "abba" and "abbc"

function palindCheck (str) {
  let rev = str.split('');

  rev.every((char, i) => {
    console.log(rev[i] === rev[str.length - i - 1]);
  });

// }

// also... without node console.log action

// function palindCheck (str) {
//   str.split('').every((char, i) => {
//     return char === str[str.length - i - 1];
//   });

}

// =====================================

// above: reverses given string str, then checks whether
// every individual (char) element of the array
// matches its opposite-end counterpart, by calling the
// every method for the array, with logic
// (rev[i] === rev [str.length - i - 1])
// (work-through stuff for this farther down,
// near bottom of file text)

// =====================================

// below: example uses of function

palindCheck("abba");
palindCheck("abbc");


// =====================================

// below: logic work-through stuff for (rev[i] === rev [str.length - i - 1]) 

  // if (rev[0] === rev[str.length - 1]) {

  // }
  // and (rev[1] === rev [str.length - 2]) {

  // }

  // and (rev[2] === rev [str.length - 3]) {

  // }

  // so (rev[x] === rev [str.length - x - 1])