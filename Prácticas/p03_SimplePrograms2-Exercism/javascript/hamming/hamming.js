//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * @param {String} str1 - the first string
 * @param {String} str2 - the second string
 * @returns {number} the hamming distance between the two strings
 * @description The Hamming distance between two strings is the number of positions at which the corresponding symbols are different.
 */
export const compute = (str1,str2) => {
  if(str1.length!==str2.length){
    throw Error("strands must be of equal length");
  }
  let count=0;
  for(let i=0; i<str1.length; i++){
    str1[i]!==str2[i]&&count++;
  }
  return count;
};