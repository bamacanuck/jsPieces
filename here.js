
function reverse (str) {
    let rev = "";
    // for (char of str) {
    //     rev = char + rev;
    // }

    console.log(str[0]);
    rev = str[0] + rev;
    console.log(rev);
    console.log(str[1]);
    rev = str[1] + rev;
    console.log(rev);
    console.log(str[2]);
    rev = str[2] + rev;

    console.log(rev);
    // return rev;
}

reverse ("abc");



// function reverse (str) {
//     let rev = str.split('').reverse().join('');
//     console.log(rev);
//     return rev;
// }