
function reverseInt (int) {

    let rev = int.toString()
    console.log(rev);
    rev = rev.split("").reverse().join("");
    console.log(rev);
    rev = parseInt(rev);
    console.log(rev);
    let revdInt = (rev * (Math.sign(int)));

    console.log(revdInt);
}

reverseInt (32);