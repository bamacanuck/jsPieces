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
	let cleanedStr = str.replace(/[^\w]/g, "").toLowerCase();

	for (let x of cleanedStr) {
		charMap[x] = (charMap[x] + 1 || 1);
		console.log(charMap[x]);
	}

	// console.log(charMap);

	console.log(charMap);
	return charMap;

	// console.log(str);

	// iterate over string
	// for (let char of str) {
	// 	charObj[char] = charObj[char] + 1 || 1;
}

charMapper("aba");

// function anagramCheck1 (strA, strB) {
// 	// like in char-plurality solution, build new
// 	// objects to hold the involved characters
// 	const strAMap = charMapper(strA);
// 	const strBMap = charMapper(strB);
// 	if ((Object.keys(strAMap).length) !== (Object.keys(strBMap).length)) {
// 		console.log("false");
// 		return false;
// 	}

// 	for (let char in strAMap) {
// 		if (strAMap[char] !== strBMap[char]) {
// 			console.log("false");
// 			return false;
// 		}
// 	}

// 	// console.log("true");
// 	return true;
// };

// anagramCheck1("ab", "ba");

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
