let str = "that puppy bear";

// let words = [];

words = str.split(' ');

for (i = 0; i < words.length; i++) {
//   let cap = word.slice(0,1).toUpperCase();
//   let restWord = word.slice(1);
//   newWord = cap + restWord;
//   console.log(cap);  
// }

console.log(words[i].slice(0,1).toUpperCase());
console.log(words[i].slice(1));

}
// let cap = word.slice(0,1).toUpperCase();