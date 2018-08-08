// challenge: for any given string, write a script that will return
// true if it's a palindrome (the same with the characters reversed)

// example function calls are with strings "abba" and "abbc"

function palindCheck (str) {
  let rev = str.split('');

  rev.every((char, i) => {
    console.log(rev[i] === rev[str.length - i - 1]);
  });
  
  // if (rev[0] === rev[str.length - 1]) {

  // }
  // and (rev[1] === rev [str.length - 2]) {

  // }

  // and (rev[2] === rev [str.length - 3]) {

  // }

  // so (rev[x] === rev [str.length - x - 1])
	
	// console.log (rev === str);

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
palindCheck("abbc");