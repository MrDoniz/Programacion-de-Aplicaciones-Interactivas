//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * 
 * @param {object} old - the old object
 * @return {object} the new object with the keys of the old object transformed to lowercase and the values of the old object transformed to lowercase
 * @description The ETL is an acronym for "Extract, Transform, Load". ETL is a simple acronym for the process of extracting data from one format and transforming it to another format.
 */
export const transform = (old) => {
  const result = {};
  for (const [score, letters] of Object.entries(old)) {
    letters.forEach((letter) => (result[letter.toLowerCase()] = Number(score)));
  }
  return result;
};
