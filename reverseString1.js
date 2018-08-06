// challenge: for any given string, write a script to return its reverse
// (a string with the same characters in the given string,
// but in reverse order)

function reverse (str) {
    var rev = str.split('').reverse().join('');
    // return rev;
    console.log(rev);
}

reverse("everyday");