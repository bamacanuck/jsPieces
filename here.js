
function reverse (str) {
    console.log(str.split('').reduce((rev, char) => {
        return char + rev;        
    }, '')
    )
    return (str.split('').reduce((rev, char) => {
        return char + rev;        
    }, '')
    )
}

reverse ("abc");