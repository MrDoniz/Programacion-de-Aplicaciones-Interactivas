function main() {
  // n numeros por argumento en un vector
  const argumentos = process.argv.slice(1);
  let vector = argumentos.map(Number);
  // quitar el primer valor
  vector.shift();
  vector.shift();
  // Si el vector está vacío, no se puede invertir
  if (vector.length == 0)
    console.log("");
  else
    console.log(minimo(vector), maximo(vector), promedio(vector));
}

function main() {
  const argumentos = process.argv.slice(1);
  const palabra = argumentos[1];
  if (argumentos.length == 1)
    console.log("");
  else
    if (palindromo(palabra))
      console.log("Es palindromo");
    else
      console.log("No es palindromo");
}



export const isValid = (isbn) => {
  let cadena = isbn.split("-").join("").split("");
  if(cadena.length !== 10) 
    return false;
  if(cadena[9] === "X") 
    cadena[9] = 10;
  console.log(cadena);
  return cadena.reduce((acumulador, valor, indice) => {
    console.log(acumulador, valor, indice);
    return acumulador + valor * (10 - indice);
  }, 0) % 11 === 0;
};

export const sum = (factores, limite) => {
	let suma = 0;
	for (let valor =0; valor < limite; valor++) {
		for (let factor of factores) {
			if (valor % factor === 0) {
				suma += valor;
				break;
			}
		}
	}
	return suma;
};