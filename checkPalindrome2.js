// challenge: for any given string, write a script that will return
// true if it's a palindrome (the same with the characters reversed)

// example function calls are with strings "abba" and "abbc"

function palinCheck (str) {
	let rev = str.split('').reverse().join('');
	
	console.log (rev === str);

  // if (str === rev) {
	// 	console.log(true);
  // }
  // else {
	// 	console.log(false);
  // }
}

// =====================================

// above: reverses given string str, then checks whether
// rev is equivalent (===) to str...
// and accordingly returns CL output of true or false

// as seen in comments above, previous if-else version
// was refactored to console.log the wanted boolean,
// with considerably less code

// =====================================

// below: example uses of function

palinCheck("abba");
palinCheck("abbc");