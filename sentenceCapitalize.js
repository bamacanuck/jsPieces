// challenge: for any given string, write a script to return
// a capitalized version, wherein the first letter of each of
// its words is captalized, while preserving all
// punctuation from the given string

// input of "our puppy bear" should yield output of
// "Our Puppy Bear"
// and input of "tomorrow night, maybe" should yield output of
// "Tomorrow Night, Maybe"

// example function call is with string "!!! our puppy ! bear!"

// consider array slice method

function capitalize (str) {
	let words = str.split(' ');

	let newArray = [];

	for (i = 0; i < words.length; i++) {
		let cap = words[i].slice(0,1).toUpperCase();
		let restWord = words[i].slice(1);
		newWord = cap + restWord;
		// console.log(newWord);
		newArray.push(newWord);
	}

		let newSentence =	newArray.join(' ');
		console.log(newSentence);
}

capitalize("!!! our puppy ! bear!");