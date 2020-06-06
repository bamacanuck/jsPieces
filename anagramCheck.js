// challenge: given any two strings, check
// whether they are anagrams of each other...
// disregarding spaces and punctuation marks...
// with lower-case letters and capitals
// considered equivalent ... (and matching
// character quantities, OF COURSE, counts)

// ('car has', 'a crash') yields True
// ('ELVIS!', 'Lives?') yields True
// ('gentleman', 'elegant man') yields False

function anagramCheck (string1, string2) {

}

module.exports = anagramCheck;


// consider char-plurality solution

function pluralityChar (str) {
	const charObj = {};
	let most = 0;
	let mostChar = '';

  for (let char of str) {
    charObj[char] = charObj[char] + 1 || 1;
	}

	// console.log(charObj);

	for (let char in charObj) {
		if (charObj[char] > most) {
			most = charObj[char];
			mostChar = char;
			// console.log(char + ":" + charObj[char]);
		}
	}