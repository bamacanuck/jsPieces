// challenge: given any two strings, check
// whether they are anagrams of each other...
// disregarding spaces and punctuation marks...
// with lower-case letters and capitals
// considered equivalent ... (and matching
// character quantities, OF COURSE, counts)

// ('car has', 'a crash') yields True
// anagrams('ELVIS!', 'Lives?') --> True
// anagrams('gentleman', 'elegant man') --> False

// make a character-mapping helper function

function charMapper (str) {
	
}

function anagramCheck (string1, string2) {
	// like in char-plurality solution, build a new
	// object to hold the involved characters
	const charObj = {};

	// iterate over the one (first) char object
	for (let char of str) {
		charObj[char] = charObj[char] + 1 || 1;

}


}

module.exports = anagramCheck;


// consider char-plurality solution, noted below

// function pluralityChar (str) {
// 	const charObj = {};
// 	let most = 0;
// 	let mostChar = '';

//   for (let char of str) {
//     charObj[char] = charObj[char] + 1 || 1;
// 	}

// 	// console.log(charObj);

// 	for (let char in charObj) {
// 		if (charObj[char] > most) {
// 			most = charObj[char];
// 			mostChar = char;
// 			// console.log(char + ":" + charObj[char]);
// 		}
// 	}