function stringCleaner (str) {

	// RegExp work to get rid of spaces, punctuation,
	// and make letter case uniform (lower case)
	str = (str.replace(/[^\w]/g, "").toLowerCase());

	console.log(str);

	// console.log(str);

	// iterate over string
	// for (let char of str) {
	// 	charObj[char] = charObj[char] + 1 || 1;
}

stringCleaner("eGaDs");