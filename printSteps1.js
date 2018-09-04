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
		// iterate over "rows" equal to int
    for (let i = 0; i < int; i++) {
				let line = "";
				
				// iterate over columns necessary
				// to be equal to int
				for (let col = 0; col < int; col++) {
					if (col <= i) {
						line = line + "#";
					}
					else {
						line = line + " ";
					}
				}
			console.log(line);
    }
}

printSteps(4);

// ===================================

// better-commented version of solution (below)
// 
function printSteps (int) {
	// iterate over "rows" equal to int
	for (let i = 0; i < int; i++) {
			let line = "";
			
			// iterate over columns necessary
			// to be equal to int
			for (let col = 0; col < int; col++) {
					// if condition is met
					if (col <= i) {
					// add a pound sign
					line = line + "#";
				}
				else {
					// otherwise, add a space
					line = line + " ";
				}
			}
		console.log(line);
	}
}

// ===================================


// some foolish early musings (below)
//
// function printSteps (int) {
//     let field = "";
//     const pound = "#";
//     let fieldFull = "" + pound.repeat(int);

//     console.log(fieldFull);
// }

// printSteps(5);