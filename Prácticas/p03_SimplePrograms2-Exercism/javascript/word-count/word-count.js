//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * 
 * @param {String} string - the string to count the words
 * @returns {number} - the number of words in the string
 * @description A word is a sequence of non-blank characters.
 */
export const countWords = (string) => {
  let counts = {}
  string.match(/\b[\w']+\b/g).forEach(word => {
    word = word.toLowerCase()
    counts[word] = counts[word] ? counts[word] + 1 : 1
  })
  return counts
}