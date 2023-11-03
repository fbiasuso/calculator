


class Calculator {

    constructor(num1=0,num2=0){
        this.num1 = num1;
        this.num2 = num2;
    }

    addition(){
        return this.num1 + this.num2
    }

    subtraction(){
        return this.num1 - this.num2
    }

    multiplication(){
        return this.num1 * this.num2
    }
    
    division(){
        return this.num2 === 0 ? "No se puede dividir por cero." : this.num1 / this.num2
    }

    power(){
        
        let operationPower = this.num2 === 0 ? 1 : this.num1;
        let limit = this.num2 < 0 ? this.num2 * -1 : this.num2;
        
        for (let index = 1; index < limit; index++) {
            operationPower = operationPower * this.num1;
            
        }
        
        return this.num2 < 0 ? 1/operationPower : operationPower; 
    }

    root(){

       const signCorrector = this.num1 === 0 ? 0 : this.num1 < 0 ? -1:+1;
       return  signCorrector * Math.pow(this.num1, 1/this.num2); // Magia negra
    }

    module(){
        return this.num1 % this.num2 
    }
}

const num1 = Number(prompt("Escriba el primer número, será usado como el primer operando: "));
const num2 = Number(prompt("Escriba el segundo número, será usado como el segundo operando y como la base de la potencia o raíz: "));
const operation = new Calculator(num1,num2);

console.log("El primer número es: "+num1);
console.log("El segundo número es: "+num2);
console.log("La Suma es: "+operation.addition());
console.log("La Resta es: "+operation.subtraction());
console.log("La Multiplicación es: "+operation.multiplication());
console.log("La División es: "+operation.division());
console.log("La Potencia es: "+operation.power());
console.log("El Módulo es: "+operation.module()); 
console.log("El Módulo es: "+operation.root()); 