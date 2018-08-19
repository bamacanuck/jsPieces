// challenge: for any given array and a
// "chunk" size, divide the array into
// subarrays, with each of them of the
// specified "chunk"-length (and whatever
// is left over, in a final subarray)

// ([1, 2, 3, 4, 5, 6], 2) yields [[1, 2], [3, 4], [5, 6]]
// ([1, 2, 3, 4, 5, 6], 3) yields [[1, 2, 3], [4, 5, 6]]
// ([2, 4, 6, 8, 10, 12, 9, 5], 5) yields
// [[2, 4, 6, 8, 10], [12, 9, 5]]
// ([2, 4, 8, 62, 17], 5) yields [[2, 4, 8, 62, 17]]
// ([2, 4, 8, 62, 17], 10) yields [[2, 4, 8, 62, 17]]

// sample function call is with input
// ([2, 4, 8, 62, 17], 2)
// yielding [ [2, 4], [8, 62], [17] ]


console.log("=============================");
console.log("");

console.log ("function call: (chunkIt ([2, 4, 8, 62, 17], 2))");

console.log("yields result:");


function chunkIt (array, size) {

	const chunked = [];
	let index = 0;

	while (index < array.length) {
		chunked.push((array.slice(index, (index + size))));
		index = index + size;
	}

	// for node purposes, the console.log statement
	// below is our equivalent of:
	// return chunked;

	console.log(chunked);

}

chunkIt ([2, 4, 8, 62, 17], 2);