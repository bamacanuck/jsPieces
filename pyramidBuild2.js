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