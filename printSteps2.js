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

function printSteps (int, row = 0) {
    if (int === row) {
			return;
		}

		const pound = "#";
		// let fieldFull = "" + pound.repeat(int);
		for (i = 0; i <= int; i++) {
			console.log(pound.repeat(int));
			// here comes RECURSION (below) -
			// function within same function
			printSteps(int + 1);
		}
}

printSteps(5);