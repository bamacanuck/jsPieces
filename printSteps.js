// build a sort of visual representation of a staircase,
// using pound signs - #, based on a given positive integer
// ... such that the 'drawing' rendered has a number of
// page lines equal to the integer, and a number of 
// pound signs - # - equal to the line number

// so, input: 3
// yields
// '#  '
// '## '
// '###'

// and input: 5
// yields
// '#    '
// '##   '
// '###  '
// '#### '
// '#####'

function printSteps (int) {
    let field = "";
    const pound = "#";
    let fieldFull = "" + pound.repeat(int);

    console.log(fieldFull);
}

printSteps(5);

