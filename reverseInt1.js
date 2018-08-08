// challenge: for any given integer, write a script that will return
// its reverse (integer with same digits, in reverse order), but
// WITHOUT extraneous leading zeroes, AND while preserving sign
// (positive/negative)

// 160 input returns 61 - NOT 061
// 300 input returns 3 - NOT 003
// 455 input returns 554
// -13 input returns -31

// example function call below is with int 35486

function reverseInt (int) {
    rev = int.toString().split('').reverse().join('').parseInt();
    console.log(rev);
}

reverseInt(35486);