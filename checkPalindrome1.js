// challenge: for any given string, write a script that will return
// true if it's a palindrome (the same with the characters reversed)
// *** altered to exempt spaces, punctuation, from consideration***

// example function calls are with strings "abba" and "abbc"

function palindCheck (str) {
  // "clean" the string - remove spaces, punctuation
  // using regex
  let cleanStr = str.replace(/[^\w]/g, "").toLowerCase();
	let rev = cleanStr.split('').reverse().join('');
	
  // return (rev === str);
  console.log (rev === cleanStr);

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

palindCheck("abba");
palindCheck("a man, a plan, a canal, Panama");

// ====================================

// below: standard return (non-console-log) version

// function palindCheck (str) {
// 	let rev = str.split('').reverse().join('');
	
//   return (rev === str);
//   // console.log (rev === str);

//   // if (str === rev) {
// 	// 	console.log(true);
//   // }
//   // else {
// 	// 	console.log(false);
//   // }
// }