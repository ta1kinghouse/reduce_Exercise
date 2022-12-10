function extractValue(arr, key) {
   return arr.reduce(function(accumulator, next){
        accumulator.push(next[key]);
        return accumulator;
    },[]); 
}

function vowelCount(str) {
   const vowels = "aeiou";
   return str.split('').reduce(function(accumulator,next){
    let lowerCase = next.toLowerCase()
    if(vowels.indexOf(lowerCase) !== -1) {
        if(accumulator[lowerCase]) {
            accumulator[lowerCase] ++;
        } else {
            accumulator[lowerCase] = 1;
            }
        } return accumulator;
    },{});
    }

function addKeyAndValue(arr, key, value) {
   return arr.reduce(function(accumulator, next, idx) {
        next[idx][key] === value;
        return accumulator;
 }, arr); 
        
 function partition(arr, callback) {
    return arr.reduce(function(accumulator, next){
        if(callback(next)) {
        accumulator[0].push(next);
    } else {
        accumulator[1].push(next);
    }
        return accumulator;
    }, [[],[]]);
 }
