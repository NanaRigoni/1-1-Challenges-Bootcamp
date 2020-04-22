const nome = "João";
const sexo = "M";
const idade = 65;
const contribuicao = 23;

// Calcular o tempo de contribuição: idade + contribuição

const calculo = (idade + contribuicao);

console.log(calculo)

if((sexo === "F") && calculo >= 85 || calculo >= 95) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar`)
}