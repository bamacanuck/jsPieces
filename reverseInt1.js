// challenge: for any given integer, write a script that will return
// its reverse (integer with same digits, in reverse order), but
// WITHOUT extraneous leading zeroes, AND while preserving sign
// (positive/negative)

// 160 input returns 61 - NOT 061
// 300 input returns 3 - NOT 003
// 455 input returns 554
// -13 input returns -31
// -700 input returns -7

// example function call below is with int -0000068453

function reverseInt (int) {
    rev = int.toString().split('').reverse().join('');
    rev = parseInt(rev);
    rev = (rev * (Math.sign(int)));
    console.log(rev);
}

reverseInt(-0000068453);

// =====================================

// above: given integer int is made a string, and split into an array
// of individual characters... the array is then reversed, and
// the characters joined to form a reversed string version...
// this string is then made an integer, and this is multiplied by
// either one, negative one, or zero, depending on the sign (or
// lack thereof) of the original given integer - int 

// =====================================

// THERE ARE HIDDEN (AND UNIDENTIFIED) BUGS, OR AT LEAST
// ONE SUCH BUG...
// reverseInt(-000000000001000000000000000000068453) yields
// -42, for instance

// =====================================

// lingering curiosity: parseInt couldn't just be included at tail
// end of
// rev = int.toString().split('').reverse().join('');
//... and I don't understand why