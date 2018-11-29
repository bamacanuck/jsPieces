// challenge: for any given string, write a script to return its reverse
// (a string with the same characters in the given string,
// but in reverse order)

// example function call is with string "weekly"

function reverse (str) {
    console.log(str.split('').reduce((rev, char) => {
        return char + rev;        
    }, '')
    // just above - args for reduce method are
    // arrow function, and starting value
    // (in this case, the empty string)
    )
    return (str.split('').reduce((rev, char) => {
        return char + rev;        
    }, '')
    )
}

// ====================================

// below: example use of function

reverse("weekly");