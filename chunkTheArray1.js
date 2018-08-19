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

// =======================================================

// display function call with specified example input

console.log("=============================");
console.log("");

console.log ("function call: (chunkIt ([11, 23, 13, 14, 52, 16, 7], 3))");

console.log("yields result:")

function chunkIt (array, size) {

//create new empty array

	const chunked = [];

	//const array (below) is the given array to be "chunked"

	//for each item/element in original 'unchunked' array, 

	for (let item of array) {
			let lastOne = chunked[chunked.length - 1];
			if (!lastOne | lastOne.length === size) {
				chunked.push([item]);
			}
			else {
				lastOne.push(item);
			}
	}

	return chunked;
}

console.log (chunkIt ([11, 23, 13, 14, 52, 16, 7], 3));


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// WELL COMMENTED VERSION BELOW
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function chunkIt (array, size) {

	//create new empty array
	
		const chunked = [];
	
		//const array (below) is the given array to be "chunked"
	
		//for each item/element in original 'unchunked' array, 
	
		for (let item of array) {
	
				// get the last item/element in the new 'chunked' array
				let lastOne = chunked[chunked.length - 1];
				// if said element/item's place in the chunk array is of
				// length equal to the specified/desired chunk length,
				// OR if said element/item does not exist,
				if (!lastOne || lastOne.length === size) {
				
					// add a new inner chunk (or "sub-chunk") to the 'chunked'
					// array, containing the current iteration element/item
				
					chunked.push([item]);
				}
	
				// OTHERWISE - add the current iteration element/item to
				// the already-forming "sub-chunk"
	
				else {
					lastOne.push(item);
				}
		}
	
		return chunked;
	}