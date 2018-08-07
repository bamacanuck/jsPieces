// challenge: for any given string, write a script that will return
// true if it's a palindrome (the same with the characters reversed)

// example function call is with string "abba"

function palinCheck (str) {
  let rev = str.split('').reverse().join('');

  if (str === rev) {
		return true;
		console.log("true");
  }
  else {
		return false;
		console.log("false");
  }
}

palinCheck("abba");