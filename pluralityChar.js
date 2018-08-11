// challenge: for any given string, write a script that will return
// the character that appears most within it

// "Matthew" input returns "t"
// "Willis" input returns "i" and "l" (?)
// "1111s111122211111s111" input returns 1

// example function call below is with string "ccABBBAcc"

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

	console.log(mostChar + " : " + most);
}

	// above: NOTE SYNTAX DISTINCTION
	// "let ... in ..."
	// inside actual/deliberate object,
	// this time...
	// rather than
	// "let ... of ..."
	// of string treated as array

pluralityChar ("ccABBBAcc");

// above: 

// =====================================

// below: work-through stuff for building the necessary string-derived object

// const str = "hey there, you";
// const chars = {};

// for (let char of str) {
// 	if (!chars[char]) {
//   	chars[char] = 1;
//   }
//   else {
//     chars[char] = chars[char] + 1;
//   }
// }

// REFACTORED AS

// const str = "hey there, you";
// const chars = {};

// for (let char of str) {
// 	chars[char] = chars[char] + 1 || 1;
// };

// chars;