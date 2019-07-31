// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let str = '' + n;
    let arr = str.split('');
    let reversed = '';
    if(arr[0] === '-'){
        for(let i = arr.length - 1; i >= 1; i--){
            reversed = reversed + arr[i];
        }
        reversed = '-' + reversed;
        return parseInt(reversed);

    } else {
        return parseInt(str
        .split('')
        .reverse()
        .join(''));
    }
}

module.exports = reverseInt;
