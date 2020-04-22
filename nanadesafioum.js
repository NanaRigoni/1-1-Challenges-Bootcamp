const nome = "Eliana";
const peso = 52;
const altura = 1.70;

//Calcular o IMC

const imc = peso / (altura * altura);

//Se IMC < 18,5 Eliana está abaixo do peso; se imc está entre 18,5 e 24,9 Eliana está com peso normal; 
// Se imc está entre 25 e 29,9 Eliana está com sobrepeso; Se imc maior que 30 Eliana está com obesidade.

if(imc < 18,5) {
    console.log(`IMC igual a ${imc}. ${nome} está abaixo do peso`)
} else {
    if(imc > 18,5 < 24,9) {
        console.log(`IMC igual a ${imc}. ${nome} está com peso normal`)
    } else {
        if(imc > 25 < 29,9) {
            console.log(`Imc igual a ${imc}. ${nome} está com sobrepeso`)
        } else {
            if(imc > 30) {
                console.log(`IMC igual a ${imc}. ${nome} está com obesidade`)
            }
        }
    }
}
