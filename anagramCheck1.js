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
	let charMap = {};

	// RegExp work to get rid of spaces, punctuation,
	// and make letter case uniform (lower case)
	for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
		charMap[char] = (charMap[char] + 1) || 1;
	};

	return charMap;

	// console.log(charMap);

	// console.log(str);

	// iterate over string
	// for (let char of str) {
	// 	charObj[char] = charObj[char] + 1 || 1;
}

// charMapper("zZz.sSs");

function anagramCheck (string1, string2) {
	// like in char-plurality solution, build new
	// objects to hold the involved characters
	const str1Map = charMapper(string1);
	const str2Map = charMapper(string2);
	if (str1Map === str2Map) {
		// return true;
		console.log("true");
	}
	else {
		// return false;
		console.log("false");
	}
};

anagramCheck("abba", "baab");

// }


// }

// module.exports = anagramCheck;


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
