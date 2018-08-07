// challenge: for any given string, write a script to return its reverse
// (a string with the same characters in the given string,
// but in reverse order)

// example function call is with string "weekly"

function reverse (str) {
    var rev = str.split('').reduce((rev, char) => {
			return char + rev;
        }, (''));
        console.log(rev);
}

// ====================================

// below: example use of function

reverse("weekly");