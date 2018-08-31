// challenge: for any given string, write a script to return
// a capitalized version, wherein the first letter of each of
// its words is captalized, while preserving all
// punctuation from the given string

// input of "our puppy bear" should yield output of
// "Our Puppy Bear"
// and input of "tomorrow night, maybe" should yield output of
// "Tomorrow Night, Maybe"

function capitalize (str) {
    let newVersion = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            newVersion = newVersion + (str[i].toUpperCase());
        }
        else {
            newVersion = newVersion + str[i];
        }
    }

    console.log(newVersion);
}

capitalize ("stephen king's the shining");

// (below) a quick 'side exercise' - for conformation
//
// const listDown = (str) => {
//     for (char of str) {
//         console.log(char + "\n");
//     }
//   };

// listDown ("Shane");