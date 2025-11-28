// Captura os elementos do HTML
const btn = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

// Função que calcula o IMC ao clicar no botão
btn.addEventListener("click", function () {

    // Pega os valores digitados pelo usuário
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    // Verifica se os campos foram preenchidos
    if (peso === "" || altura === "") {
        resultado.textContent = "⚠️ Preencha todos os campos!";
        resultado.style.color = "red";
        return;
    }

    // Converte strings para número
    peso = Number(peso);
    altura = Number(altura);

    // Fórmula do IMC: peso / altura²
    let imc = peso / (altura * altura);
    let classificacao = "";

    // Define a classificação de acordo com o valor do IMC
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    // Exibe o resultado formatado
    resultado.style.color = "#333";
    resultado.textContent = `Seu IMC é ${imc.toFixed(2)} — ${classificacao}`;
});
