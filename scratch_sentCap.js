let str = "our puppy bear";

// let words = [];

words = str.split(' ');

for (let word in (words)) {
  let cap = word.slice(0,1).toUpperCase();
  let restWord = word.slice(1);
  let newWord = cap + restWord;
  return NewWord  
}
