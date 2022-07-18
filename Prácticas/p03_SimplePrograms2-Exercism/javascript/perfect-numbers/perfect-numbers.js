//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * 
 * @param {*} num - the number to check
 * @returns {String}
 * @description A number is perfect if it is equal to the sum of its proper divisors, excluding itself.
 */
export const classify = (num) => {
  let aliquotSum = 0;
  for (let i = 1; i < num; i++) 
    if (num % i == 0) 
      aliquotSum += i;
  if (num <= 0) 
    throw new Error('Classification is only possible for natural numbers.');
  if (aliquotSum == num)
    return 'perfect';
  if (aliquotSum < num) 
    return 'deficient';
  if (aliquotSum > num)
    return 'abundant';
};
