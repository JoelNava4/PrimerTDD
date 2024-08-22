function generarCadena(numero){
    if (numero % 3 === 0){
        return "Fizz"
    }
    else{
        return numero.toString();
    }
}

export function generarFizzBuzz(numero){
    return generarCadena(numero);
}