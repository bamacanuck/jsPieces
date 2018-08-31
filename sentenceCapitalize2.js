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

// =====================================

// well-commented version below, and a side exercise, further down

// =====================================

function capitalize (str) {
    // start with default capitalization for first character
    let newVersion = str[0].toUpperCase();

    // begin iterating with second character (str[1])
    for (let i = 1; i < str.length; i++) {
        // if char to immediate left of this char
        // is a space
        if (str[i - 1] === ' ') {
            // capitalize the current char and add it to
            // newVersion
            newVersion = newVersion + (str[i].toUpperCase());
        }
        else {
            // otherwise, add it without capitalizing
            newVersion = newVersion + str[i];
        }
    }

    console.log(newVersion);
}

// =====================================

// (below) a quick 'side exercise' - for conformation
//
// const listDown = (str) => {
//     for (char of str) {
//         console.log(char + "\n");
//     }
//   };

// listDown ("Shane");