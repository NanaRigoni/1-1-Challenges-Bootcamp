![](https://github.com/NanaRigoni/1-1-Challenges-Bootcamp/blob/master/capa-readme.png)

# Readme

Estou fazendo aulas no BootCamp Launchbase da Rocketseat. Essa é a primeira vez que crio um código. Peço, por gentileza a ajuda de vocês para melhorá-lo

No bootcamp somos desafiados a fazer alguns exercícios e postar aqui no GitHub, nessa primeira fase foi solicitado a criação de um programa para calcular o IMC de um indivíduo a partir da criação de algumas constantes, e um outro programa para calcular a aposentadoria.

Obs.: O cálculos são fictícios, tanto da aposentadoria como para o cálculo do IMC existem muitos outros fatores para serem levados em conta :)

# 📖 Sobre o desafio

---

## Programa para o Cálculo do IMC:

Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

Comece criando constantes para armazenar o `nome`, `peso`, `altura` e `sexo` de uma pessoa, por exemplo:

const nome = "Carlos";
const peso = 84;
const altura = 1.88;

A partir desses dados armazene em uma constante chamada `imc` o cálculo do índice de massa corporal definido pela fórmula abaixo:

peso / (altura * altura);

Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

- `SE` o `IMC` maior ou igual a `30`: Carlos você está acima do peso;
- `SE` o `IMC` menor que `29.9`: Carlos você não está acima do peso;

## Programa para o cálculo da Aposentadoria:

Crie um programa para calcular a aposentadoria de uma pessoa.

*Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)*

Comece criando constantes para armazenar `nome`, `sexo`, `idade` e `contribuicao`(em anos), por exemplo:

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.

- O tempo de contribuição mínimo para **homens** é de **35 anos** e, para **mulheres**, **30 anos**;
- Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do **homem** precisa ser de no mínimo 95 anos, enquanto a **mulher** precisa ter no mínimo 85 anos na soma;

Com base nas regras acima imprima na tela as mensagens:

- `SE` a pessoa estiver aposentada: `Silvana, você pode se aposentar!`;
- `SE` a pessoa NÃO estiver aposentada: `Silvana, você ainda não pode se aposentar!`;

*Dica: Você pode unir duas condições, veja o exemplo abaixo*

if (condicao1) { if (condicao2) { // Condição 1 e 2 passaram } else { // Condição 1 passou, porém condição 2 não passou }
} else { // Condição 1 não passou
}

# 🛠 Como melhorar?

---

Deixe suas sugestões. Obrigada :)
