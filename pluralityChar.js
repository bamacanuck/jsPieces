// challenge: for any given string, write a script that will return
// the character that appears most within it

// "Matthew" input returns "t"
// "Willis" input returns "i" and "l" (?)
// "1111s111122211111s111" input returns 1

// example function call below is with string "ccABBBAcc"

function pluralityChar (str) {
  charObj = {};

  for (let char of str) {
    charObj[char] = charObj[char] + 1 || 1;
	}

	console.log(charObj);
		
}

pluralityChar ("hey there, you");

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