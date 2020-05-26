const words1 = ['Hello', 'how\'s', 'it', 'going', 'eh'];
const words2 = ['What\'s', 'all', 'this', 'aboot', 'then'];
// Takes in words array
function americanize(words) {
 const canadianWords = ['eh', 'aboot'];
 // Returns sentence string with Canadian words removed
let sentence;
 for(let canWord of words) {
   const expr = new RegExp(canWord)
   sentence = words.replace(expr, '')
 }

 return sentence;

}

console.log(americanize('Are our all doing eh'));