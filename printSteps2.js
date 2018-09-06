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

function printSteps (int, row = 0, epstay = "") {
	if (int === row) {
		return;
	}

	if (int === epstay.length) {
		console.log(epstay);
		return printSteps(int, (row + 1));
	}

	if (epstay.length <= row) {
		epstay = epstay + "#";
	}
	else {
		epstay = epstay + " ";
	}

	printSteps (int, row, epstay);

}

printSteps(5);

// =====================================

// better-commented version of above solution
// (below)



// =====================================

// solution to display opposite "stairs"
// (below)

// function printSteps (int, row) {
//     if (int === 0) {
// 			return;
// 		}

// 		const pound = "#";
//     	// let fieldFull = "" + pound.repeat(int);
// 		console.log(pound.repeat(int));
// 		// here comes RECURSION (below) -
// 		// function within same function
// 		printSteps(int -1);
// }

// printSteps(5);