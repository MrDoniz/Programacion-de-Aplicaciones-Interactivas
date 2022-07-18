/**
 * @author       F. de Sande
 * @since 27.01.2020
 * @since 18.02.2021
 * @see {@link https://towardsdatascience.com/how-to-make-pi-part-1-d0b41a03111f}
 * 
 * Compute PI 
 * @description The code uses the method of Riemann Sums to approximate the area under a circle. 
 * This approximation is equal to (pi / 4). For more on Riemann Sums, see here.
 * Uses prompt and alert for input/output
 */

function CalculatePI() {
  let numRectangles = prompt("Enter number of rectangles, please:", "0");
  if (numRectangles > 0) { 
    let deltaX = 1.0 / numRectangles;
    let x = 0;
    let Pi = 0;
    while (x < 1) {
      let fx = Math.sqrt(1 - x * x);  // Circle with radius 1 and center at (0, 0)
      Pi += fx * deltaX;  // rectangle area
      x += deltaX;
		  // debugger;
    }
    Pi = 4 * Pi;
    alert(Pi);
  }
  else {
    alert("Canceled or Error in input: Input must be positive.");
	}
}
