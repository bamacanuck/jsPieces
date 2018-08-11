// challenge: for any given array and a
// "chunk" size, divide the array into
// subarrays, with each of them of the
// specified "chunk"-length (and whatever
// is left over, in a final subarray)

// ([1, 2, 3, 4, 5, 6], 2) yields [[1, 2], [3, 4], [5, 6]]
// ([1, 2, 3, 4, 5, 6], 3) yields [[1, 2, 3], [4, 5, 6]]
// ([2, 4, 6, 8, 10, 12, 9, 5], 6) yields
// [[2, 4, 6, 8, 10, 12], [9, 5]]
// ([2, 4, 8, 62, 17], 5) yields [[2, 4, 8, 62, 17]]
// ([2, 4, 8, 62, 17], 10) yields [[2, 4, 8, 62, 17]]