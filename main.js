// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false


const example1 = 'anagram';
const example2 = 'nagaram';
const example3 = 'car';
const example4 = 'rat';

console.log([...example1].sort().join(''))
console.log([...example2].sort().join(''))
///////// first attempt ////////
function isAnagram(string1, string2) {
  const answer = [...string1].sort().join('') == [...string2].sort().join('') ? true : false;       ///this solution was mostly my first attempt
  return answer;                                                                                    ///but there was tinkering. solved.
}

console.log(isAnagram(example1, example2))
console.log(isAnagram(example3, example4))
