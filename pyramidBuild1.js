// build a sort of visual representation of a pyramid,
// using pound signs - #, based on a given positive integer
// ... such that the 'drawing' rendered has a number of
// page lines equal to the integer, and a number of 
// pound signs - # - sufficient to create the
// 'pyramid' visual

// so, input: 3
// yields
// '  #  '
// ' ### '
// '#####'

// and input: 1
// yields just
// '#'

function pyramidBuild (int) {
    for (let row = 0; row < int; int++) {
        let level = "";

        for (let col = 0; col < (2*int)-1; col++) {
            const mid = Math.floor(((2 *int) - 1)/ 2);
            
        }
    }
}

pyramidBuild (5);