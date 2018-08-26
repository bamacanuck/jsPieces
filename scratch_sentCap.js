let str = "that puppy bear";

// let words = [];

words = str.split(' ');

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

// console.log(words[i].slice(0,1).toUpperCase());
// console.log(words[i].slice(1));

// }
// let cap = word.slice(0,1).toUpperCase();