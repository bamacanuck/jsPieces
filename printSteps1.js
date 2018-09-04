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
    for (let i = 0; i < int; i++) {
				let line = [];
				
				for (let col = 0; col < int; col++) {
					if (col <= int) {
						line.push("#");
					}
					else {
						line.push(" ");
					}
				}
			console.log(line);
    }
}

printSteps(5);

// some foolish early musings (below)
//
// function printSteps (int) {
//     let field = "";
//     const pound = "#";
//     let fieldFull = "" + pound.repeat(int);

//     console.log(fieldFull);
// }

// printSteps(5);