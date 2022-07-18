




sub(rational2) {





  return this.add(new Rational(-rational2.#numerador, rational2.#denominador))





}










mul(rational2) {





  return this.reduce(this.#numerador * rational2.#numerador, this.#denominador * rational2.#denominador);





}










div(rational2) {





  if (rational2.#numerador === 0) { throw new Error("can't divide by zero") }





  return this.reduce(this.#numerador * rational2.#denominador, rational2.#numerador * this.#denominador);





}










abs(n = this.#numerador, d = this.#denominador) {





  if (n < 0) { n *= -1 };





  if (d < 0) { d *= -1 };





  return this.reduce(n, d);





}










exprational(a) {





  if (a < 0) { return this.reduce(this.#denominador ** -a, this.#numerador ** -a) }





  return this.reduce(this.#numerador ** a, this.#denominador ** a)





}










expreal(a) {





  return Number(Math.pow(a, this.#numerador / this.#denominador).toPrecision(2));





}










reduce(n = this.#numerador, d = this.#denominador) {





  if (n === 0) { return new Rational(0, 1) }





  let sign = 1;





  if (n < 0) { n *= -1; sign *= -1 }





  if (d < 0) { d *= -1; sign *= -1 }





  let x = 2;





  while (x <= n && x <= d) {





    if (n % x === 0 && d % x === 0) {





      n /= x;





      d /= x;





    } x += 1;





  } return new Rational(n * sign, d)





}

        

          

}