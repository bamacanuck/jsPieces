// challenge: for any given integer, write a script that will return
// its reverse (integer with same digits, in reverse order)

// 013 input returns 31 - NOT 310
// 455 input returns 554

// example function call below is with int 35486

function reverseInt (int) {
    rev = int.toString().split('').reverse().join('').parseInt();
    console.log(rev);
}

reverseInt(35486);